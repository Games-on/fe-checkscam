import { CommonModule } from '@angular/common';
import { Component, OnInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RecaptchaModule } from 'ng-recaptcha';
import { HttpErrorResponse } from '@angular/common/http';
import { ReportService } from '../../../services/report.service';
import { ReportDTO } from '../../../dtos/report.dto'; // DTO hiện có
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from "../../footer/footer.component";
import { ChatBoxComponent } from "../../chat-box/chat-box.component";

// Interface để định nghĩa cấu trúc của một mục báo cáo ĐƠN LẺ trong báo cáo gộp
// Các thông tin chung (email, mô tả) sẽ không nằm ở đây nữa
interface ReportItem {
  type: 1 | 2 | 3; // 1: SDT, 2: STK, 3: URL
  info: string;
  info2?: string; // Tên chủ TK
  info3?: string; // Ngân hàng
  selectedFiles: File[];
  pageToReport?: string; // Giả sử trường này có thể dùng chung
}

@Component({
  selector: 'app-create-report',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, RecaptchaModule, FooterComponent, HeaderComponent, ChatBoxComponent],
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.scss']
})
export class CreateReportComponent implements OnInit {

  @ViewChildren('fileInputSingle') fileInputSingle!: QueryList<ElementRef<HTMLInputElement>>;
  @ViewChildren('groupFileInput') fileInputGroup!: QueryList<ElementRef<HTMLInputElement>>;


  reportType: 'single' | 'group' = 'single'; // Mặc định là báo cáo đơn

  // Dữ liệu cho báo cáo đơn (vẫn giữ nguyên cấu trúc cũ cho đơn)
  singleReportItem: {
    type: 1 | 2 | 3;
    info: string;
    info2?: string;
    info3?: string;
    emailAuthorReport: string;
    infoDescription: string;
    selectedFiles: File[];
    pageToReport?: string;
  } = {
    type: 1, // Mặc định là số điện thoại
    info: '',
    emailAuthorReport: '',
    infoDescription: '',
    selectedFiles: [],
  };

  // Dữ liệu cho báo cáo gộp - CHỈ LƯU TRỮ CÁC MỤC TỐ CÁO CỤ THỂ
  groupReportItems: ReportItem[] = [];

  // Các trường thông tin chung cho báo cáo gộp
  emailAuthorReportGroup: string = '';
  infoDescriptionGroup: string = '';
  scamAmountGroup: number | null = null; // Thêm trường số tiền lừa đảo nếu có

  showChatbox: boolean = false;
  agreeTerms: boolean = false;
  captchaToken = '';

  constructor(private reportService: ReportService, private router: Router) { }

  ngOnInit(): void {
    // Khởi tạo một mục báo cáo rỗng cho báo cáo gộp khi component khởi tạo
    this.addGroupReportItem();
  }

  // Phương thức cho AI Tư vấn
  onAiTuVanClicked() {
    this.showChatbox = true;
  }

  closeChatbox() {
    this.showChatbox = false;
  }

  // Xử lý reCAPTCHA
  handleCaptchaResponse(token: string | null): void {
    this.captchaToken = token ?? '';
  }

  // --- Logic File Upload ---
  // Cho báo cáo đơn
  onFileSelectSingle(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.singleReportItem.selectedFiles = Array.from(input.files);
      console.log('Files selected for single report:', this.singleReportItem.selectedFiles);
    }
    input.value = ''; // Reset input để cho phép chọn lại cùng file
  }

  // Cho báo cáo gộp (xử lý từng mục)
  onFileSelectGroup(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.groupReportItems[index].selectedFiles = Array.from(input.files);
      console.log(`Files selected for group item ${index}:`, this.groupReportItems[index].selectedFiles);
    }
    input.value = '';
  }

  // Drag-drop cho báo cáo đơn
  onDragOverSingle(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const target = event.currentTarget as HTMLElement;
    if (target && target.classList.contains('drop-zone')) {
      target.classList.add('drag-over');
    }
  }

  onDragLeaveSingle(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const target = event.currentTarget as HTMLElement;
    if (target && target.classList.contains('drop-zone')) {
      target.classList.remove('drag-over');
    }
  }

  onDropSingle(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const target = event.currentTarget as HTMLElement;
    if (target && target.classList.contains('drop-zone')) {
      target.classList.remove('drag-over');
    }

    if (event.dataTransfer && event.dataTransfer.files) {
      const files = Array.from(event.dataTransfer.files);
      const imageFiles = files.filter(file => file.type.startsWith('image/'));

      if (imageFiles.length > 0) {
        this.singleReportItem.selectedFiles = imageFiles;
        console.log('Files dropped for single report:', this.singleReportItem.selectedFiles);
      } else {
        alert("Chỉ chấp nhận các tệp hình ảnh (PNG, JPG, GIF).");
      }
    }
  }

  // Drag-drop cho báo cáo gộp (xử lý từng mục)
  onDragOverGroup(event: DragEvent): void { // Changed name to avoid conflict
    event.preventDefault();
    event.stopPropagation();
    const target = event.currentTarget as HTMLElement;
    if (target && target.classList.contains('drop-zone')) {
      target.classList.add('drag-over');
    }
  }

  onDragLeaveGroup(event: DragEvent): void { // Changed name
    event.preventDefault();
    event.stopPropagation();
    const target = event.currentTarget as HTMLElement;
    if (target && target.classList.contains('drop-zone')) {
      target.classList.remove('drag-over');
    }
  }

  onDropGroup(event: DragEvent, index: number): void {
    event.preventDefault();
    event.stopPropagation();
    const target = event.currentTarget as HTMLElement;
    if (target && target.classList.contains('drop-zone')) {
      target.classList.remove('drag-over');
    }

    if (event.dataTransfer && event.dataTransfer.files) {
      const files = Array.from(event.dataTransfer.files);
      const imageFiles = files.filter(file => file.type.startsWith('image/'));

      if (imageFiles.length > 0) {
        this.groupReportItems[index].selectedFiles = imageFiles;
        console.log(`Files dropped for group item ${index}:`, this.groupReportItems[index].selectedFiles);
      } else {
        alert("Chỉ chấp nhận các tệp hình ảnh (PNG, JPG, GIF).");
      }
    }
  }

  // Xóa tệp đã chọn
  removeFile(file: File, context: 'single' | 'group', index?: number): void {
    if (context === 'single') {
      this.singleReportItem.selectedFiles = this.singleReportItem.selectedFiles.filter(f => f !== file);
    } else if (context === 'group' && index !== undefined) {
      this.groupReportItems[index].selectedFiles = this.groupReportItems[index].selectedFiles.filter(f => f !== file);
    }
  }

  // --- Logic Báo cáo gộp ---
  addGroupReportItem(): void {
    this.groupReportItems.push({
      type: 1, // Mặc định là số điện thoại
      info: '',
      selectedFiles: [],
    });
  }

  removeGroupReportItem(index: number): void {
    if (this.groupReportItems.length > 1) { // Đảm bảo luôn có ít nhất 1 mục
      this.groupReportItems.splice(index, 1);
    } else {
      alert("Bạn phải có ít nhất một mục báo cáo.");
    }
  }

  // Reset các trường phụ thuộc vào loại thông tin cho báo cáo đơn
  resetSingleInfoFields(): void {
    this.singleReportItem.info2 = undefined;
    this.singleReportItem.info3 = undefined;
  }

  // Reset các trường phụ thuộc vào loại thông tin cho báo cáo gộp
  resetGroupInfoFields(index: number): void {
    this.groupReportItems[index].info2 = undefined;
    this.groupReportItems[index].info3 = undefined;
  }

  // --- Gửi báo cáo ---
  createReport(): void {
    if (this.isFormInvalid()) {
      alert('Vui lòng điền đầy đủ các trường bắt buộc, đồng ý điều khoản và xác nhận Captcha.');
      return;
    }

    // Xử lý dữ liệu tùy theo loại báo cáo
    if (this.reportType === 'single') {
      const reportDTO: ReportDTO = {
        info: this.singleReportItem.info,
        pageToReport: this.singleReportItem.pageToReport || '', // Đảm bảo có giá trị
        emailAuthorReport: this.singleReportItem.emailAuthorReport,
        type: this.singleReportItem.type,
        reason: this.singleReportItem.infoDescription, // Giả sử mô tả là reason
        infoDescription: this.singleReportItem.infoDescription,
        captchaToken: this.captchaToken,
        info2: this.singleReportItem.info2,
        info3: this.singleReportItem.info3
        // scamAmount: this.scamAmountSingle, // Nếu có trường này cho báo cáo đơn
      };
      this.sendReport(reportDTO, this.singleReportItem.selectedFiles);

    } else if (this.reportType === 'group') {
      const groupReportDTOs: ReportDTO[] = this.groupReportItems.map(item => ({
        info: item.info,
        pageToReport: item.pageToReport || '', // Nếu mỗi mục có pageToReport riêng
        emailAuthorReport: this.emailAuthorReportGroup, // Sử dụng email chung
        type: item.type,
        reason: this.infoDescriptionGroup, // Sử dụng mô tả chung làm reason
        infoDescription: this.infoDescriptionGroup, // Sử dụng mô tả chung
        captchaToken: this.captchaToken, // Captcha chung
        info2: item.info2,
        info3: item.info3,
        // scamAmount: this.scamAmountGroup, // Sử dụng số tiền chung
      }));

      // Gửi toàn bộ mảng báo cáo gộp. Service cần hỗ trợ API này.
      const allFilesForGroupReport = this.groupReportItems.flatMap(item => item.selectedFiles);
      this.sendGroupReports(groupReportDTOs, allFilesForGroupReport);
    }
  }

  // Hàm gửi báo cáo đơn (giữ nguyên)
  private sendReport(reportDTO: ReportDTO, files: File[]): void {
    this.reportService.createReport(reportDTO).subscribe({
      next: (res: any) => {
        alert('Gửi thông tin báo cáo thành công!');
        const reportId = res.data?.id ?? res.id;
        if (!reportId) {
          alert('Không nhận được ID báo cáo từ server. Không thể tải tệp đính kèm.');
          this.router.navigate(['/bao-cao-thanh-cong']);
          return;
        }
        if (files.length) {
          this.uploadFiles(reportId, files);
        } else {
          this.router.navigate(['/bao-cao-thanh-cong']);
        }
      },
      error: (err: HttpErrorResponse) => {
        console.error('Lỗi khi tạo báo cáo:', err);
        alert(`Lỗi: ${err.error?.message || err.message}`);
      }
    });
  }

  // Hàm gửi báo cáo gộp (đã sửa)
  private sendGroupReports(groupReportDTOs: ReportDTO[], allFiles: File[]): void {
      this.reportService.createGroupReports(groupReportDTOs).subscribe({
          next: (res: any) => {
              alert('Gửi thông tin báo cáo gộp thành công!');
              // Backend nên trả về danh sách ID tương ứng với mỗi reportDTO.
              // Giả sử res.data là một mảng các đối tượng có thuộc tính 'id'
              const reportIds: (number | string)[] = (res.data instanceof Array) ?
                res.data.map((r: any) => r.id).filter((id: any) => id !== undefined && id !== null) : [];

              if (allFiles.length > 0 && reportIds.length > 0) {
                  // Cần quyết định cách upload files:
                  // 1. Upload tất cả file cho ID của báo cáo gộp chính (nếu backend hỗ trợ)
                  // 2. Lặp qua từng reportId và upload files tương ứng (phức tạp hơn nếu files không phân chia theo item)
                  // 3. Giả sử ta upload tất cả file cho reportId đầu tiên (hoặc một ID chung)
                  // CẦN ĐIỀU CHỈNH LOGIC NÀY TÙY THEO CÁCH BACKEND CỦA BẠN XỬ LÝ ATTACHMENTS CHO BÁO CÁO GỘP.
                  this.uploadFiles(reportIds[0], allFiles); // Tạm thời upload tất cả files cho ID đầu tiên
              } else {
                  this.router.navigate(['/bao-cao-thanh-cong']);
              }
          },
          error: (err: HttpErrorResponse) => {
              console.error('Lỗi khi tạo báo cáo gộp:', err);
              alert(`Lỗi: ${err.error?.message || err.message}`);
          }
      });
  }


  private uploadFiles(reportId: number | string, files: File[]): void {
    const formData = new FormData();
    files.forEach(f => formData.append('files', f, f.name));

    this.reportService.uploadFiles(reportId, formData).subscribe({
      next: () => {
        alert('Tải lên tệp thành công!');
        this.router.navigate(['/bao-cao-thanh-cong']);
      },
      error: (err: HttpErrorResponse) => {
        console.error('Lỗi khi tải lên tệp:', err);
        alert(`Lỗi: ${err.error?.message || err.message}`);
        this.router.navigate(['/bao-cao-loi']);
      }
    });
  }

  private isFormInvalid(): boolean {
    if (!this.captchaToken || !this.agreeTerms) {
      return true;
    }

    if (this.reportType === 'single') {
      const item = this.singleReportItem;
      // Thêm kiểm tra cho email và mô tả
      const basicInvalid = !item.info || !item.emailAuthorReport || !item.infoDescription;
      const extraInvalidForType2 = item.type === 2 && (!item.info2 || !item.info3);
      return basicInvalid || extraInvalidForType2;
    } else if (this.reportType === 'group') {
      // Kiểm tra các trường chung cho báo cáo gộp
      if (!this.emailAuthorReportGroup || !this.infoDescriptionGroup) {
          return true;
      }
      if (this.groupReportItems.length === 0) {
        return true; // Phải có ít nhất một mục trong báo cáo gộp
      }
      for (const item of this.groupReportItems) {
        const basicInvalid = !item.info; // Chỉ kiểm tra info vì email, mô tả đã là chung
        const extraInvalidForType2 = item.type === 2 && (!item.info2 || !item.info3);
        if (basicInvalid || extraInvalidForType2) {
          return true; // Nếu bất kỳ mục nào không hợp lệ
        }
      }
      return false; // Tất cả các mục và thông tin chung đều hợp lệ
    }
    return true; // Trường hợp không xác định
  }

  // Mở popup hoặc điều hướng đến trang điều khoản
  openTermsAndConditions(event: Event): void {
    event.preventDefault();
    alert('Hiển thị điều khoản và điều kiện ở đây hoặc mở một trang mới.');
  }

  // Cập nhật lại resetForm
  resetForm(): void {
    this.reportType = 'single';
    this.singleReportItem = {
      type: 1,
      info: '',
      emailAuthorReport: '',
      infoDescription: '',
      selectedFiles: [],
    };
    this.groupReportItems = [];
    this.addGroupReportItem(); // Thêm lại một item rỗng cho báo cáo gộp

    this.emailAuthorReportGroup = '';
    this.infoDescriptionGroup = '';
    this.scamAmountGroup = null;

    this.agreeTerms = false;
    this.captchaToken = '';
  }
}