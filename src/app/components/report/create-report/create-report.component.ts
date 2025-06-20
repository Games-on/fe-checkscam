import { CommonModule } from '@angular/common';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RecaptchaModule } from 'ng-recaptcha';
import { HttpErrorResponse } from '@angular/common/http';
import { ReportService } from '../../../services/report.service';
import { ReportDTO } from '../../../dtos/report.dto';
import { GroupReportRequestDTO, ReportDetailItemDTO } from '../../../dtos/group-report-request.dto';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from "../../footer/footer.component";
import { ChatBoxComponent } from "../../chat-box/chat-box.component";
import { Observable } from 'rxjs';

interface LocalReportItem {
  type: 1 | 2 | 3;
  info: string;
  description: string;
  info2?: string;
  info3?: string;
}

@Component({
  selector: 'app-create-report',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, RecaptchaModule, FooterComponent, HeaderComponent, ChatBoxComponent],
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.scss']
})
export class CreateReportComponent implements OnInit {

  @ViewChild('fileInputSingle') fileInputSingle!: ElementRef<HTMLInputElement>;
  @ViewChild('commonGroupFileInput') commonGroupFileInput!: ElementRef<HTMLInputElement>;

  reportType: 'single' | 'group' = 'single';

  singleReportItem: {
    type: 1 | 2 | 3;
    info: string;
    info2?: string;
    info3?: string;
    emailAuthorReport: string;
    description: string;
    selectedFiles: File[];
    pageToReport?: string;
  } = {
    type: 1,
    info: '',
    emailAuthorReport: '',
    description: '',
    selectedFiles: [],
  };

  groupReportItems: LocalReportItem[] = [];

  emailAuthorReportGroup: string = '';
  descriptionGroup: string = '';
  scamAmountGroup: number | null = null;
  selectedFilesGroup: File[] = [];

  selectedCategoryId: number | null = null;

  showChatbox: boolean = false;
  agreeTerms: boolean = false;
  captchaToken = '';

  constructor(private reportService: ReportService, private router: Router) { }

  ngOnInit(): void {
    this.addGroupReportItem();
  }

  onAiTuVanClicked() {
    this.showChatbox = true;
  }

  closeChatbox() {
    this.showChatbox = false;
  }

  handleCaptchaResponse(token: string | null): void {
    this.captchaToken = token ?? '';
  }

  onFileSelectSingle(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.singleReportItem.selectedFiles = Array.from(input.files);
    }
    input.value = '';
  }

  onFileSelectCommonGroup(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFilesGroup = Array.from(input.files);
    }
    input.value = '';
  }

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
      } else {
        alert("Chỉ chấp nhận các tệp hình ảnh (PNG, JPG, GIF).");
      }
    }
  }

  onDragOverCommonGroup(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const target = event.currentTarget as HTMLElement;
    if (target && target.classList.contains('drop-zone')) {
      target.classList.add('drag-over');
    }
  }

  onDragLeaveCommonGroup(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const target = event.currentTarget as HTMLElement;
    if (target && target.classList.contains('drop-zone')) {
      target.classList.remove('drag-over');
    }
  }

  onDropCommonGroup(event: DragEvent): void {
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
        this.selectedFilesGroup = imageFiles;
      } else {
        alert("Chỉ chấp nhận các tệp hình ảnh (PNG, JPG, GIF).");
      }
    }
  }

  removeFile(file: File, context: 'single' | 'group'): void {
    if (context === 'single') {
      this.singleReportItem.selectedFiles = this.singleReportItem.selectedFiles.filter(f => f !== file);
    } else if (context === 'group') {
      this.selectedFilesGroup = this.selectedFilesGroup.filter(f => f !== file);
    }
  }

  addGroupReportItem(): void {
    this.groupReportItems.push({
      type: 1,
      info: '',
      description: '',
      info2: undefined,
      info3: undefined,
    });
  }

  removeGroupReportItem(index: number): void {
    if (this.groupReportItems.length > 1) {
      this.groupReportItems.splice(index, 1);
    } else {
      alert("Bạn phải có ít nhất một mục báo cáo.");
    }
  }

  resetSingleInfoFields(): void {
    this.singleReportItem.info2 = undefined;
    this.singleReportItem.info3 = undefined;
  }

  resetGroupInfoFields(index: number): void {
    this.groupReportItems[index].info2 = undefined;
    this.groupReportItems[index].info3 = undefined;
  }

  createReport(): void {
    if (this.isFormInvalid()) {
      alert('Vui lòng điền đầy đủ các trường bắt buộc, đồng ý điều khoản và xác nhận Captcha.');
      return;
    }

    if (this.reportType === 'single') {
      const reportDTO: ReportDTO = {
        info: this.singleReportItem.info.trim(), // Thêm trim() cho single report cũng
        pageToReport: this.singleReportItem.pageToReport ? this.singleReportItem.pageToReport.trim() : '', // Thêm trim() và kiểm tra null/undefined
        emailAuthorReport: this.singleReportItem.emailAuthorReport.trim(), // Thêm trim()
        type: this.singleReportItem.type,
        description: this.singleReportItem.description.trim(), // Thêm trim()
        captchaToken: this.captchaToken,
        info2: this.singleReportItem.info2 ? this.singleReportItem.info2.trim() : undefined, // Thêm trim() và kiểm tra null/undefined
        info3: this.singleReportItem.info3 ? this.singleReportItem.info3.trim() : undefined, // Thêm trim() và kiểm tra null/undefined
        categoryId: this.selectedCategoryId!,
      };
      this.sendReport(reportDTO, this.singleReportItem.selectedFiles, false);

    } else if (this.reportType === 'group') {
      // Đảm bảo rằng reportDetails được tạo ra từ groupReportItems
      // và các trường info, description được trim() sạch sẽ
      const reportDetails: ReportDetailItemDTO[] = this.groupReportItems.map(item => ({
        type: item.type,
        info: item.info.trim(), // Đảm bảo trim ở đây
        info2: item.info2 ? item.info2.trim() : undefined, // Thêm trim() và kiểm tra null/undefined
        info3: item.info3 ? item.info3.trim() : undefined, // Thêm trim() và kiểm tra null/undefined
        description: item.description.trim() // Đảm bảo trim ở đây
      }));

      // Kiểm tra thêm một lần nữa nếu mảng reportDetails bị rỗng sau khi trim
      // (Mặc dù isFormInvalid() đã xử lý phần này, đây là lớp bảo vệ bổ sung)
      if (reportDetails.length === 0) {
          alert('Danh sách chi tiết báo cáo gộp không được để trống sau khi xử lý. Vui lòng nhập thông tin hợp lệ.');
          return;
      }

      const groupReportPayload: GroupReportRequestDTO = {
        description: this.descriptionGroup.trim(), // Thêm trim()
        emailAuthorReport: this.emailAuthorReportGroup.trim(), // Thêm trim()
        scamAmount: this.scamAmountGroup,
        captchaToken: this.captchaToken,
        reportDetails: reportDetails, // Đây là mảng chứa các chi tiết báo cáo đã được trim()
        categoryId: this.selectedCategoryId!,
      };

      this.sendReport(groupReportPayload, this.selectedFilesGroup, true);
    }
  }

  private sendReport(payload: ReportDTO | GroupReportRequestDTO, files: File[], isGroupReport: boolean): void {
    let reportObservable: Observable<any>;
    if (isGroupReport) {
      reportObservable = this.reportService.createGroupReports(payload as GroupReportRequestDTO);
    } else {
      reportObservable = this.reportService.createReport(payload as ReportDTO);
    }

    reportObservable.subscribe({
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
        const errorMessage = err.error?.message || err.message;
        const fieldErrors = err.error?.errors ? err.error.errors.map((e: any) => e.defaultMessage).join(', ') : '';
        alert(`Lỗi: ${errorMessage}${fieldErrors ? ' - Chi tiết: ' + fieldErrors : ''}`);
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
        alert(`Lỗi khi tải tệp: ${err.error?.message || err.message}`);
        this.router.navigate(['/bao-cao-loi']);
      }
    });
  }

  private isFormInvalid(): boolean {
    if (!this.captchaToken || !this.agreeTerms) {
      return true;
    }

    if (this.selectedCategoryId === null) {
      return true;
    }

    if (this.reportType === 'single') {
      const item = this.singleReportItem;
      const basicInvalid = !item.info || !item.emailAuthorReport || !item.description;
      const extraInvalidForType2 = item.type === 2 && (!item.info2 || !item.info3);
      return basicInvalid || extraInvalidForType2;
    } else if (this.reportType === 'group') {
      if (!this.emailAuthorReportGroup || !this.descriptionGroup) {
          return true;
      }
      if (this.groupReportItems.length === 0) {
        return true;
      }
      for (const item of this.groupReportItems) {
        // Trim whitespace before checking for emptiness
        const trimmedInfo = item.info ? item.info.trim() : '';
        const trimmedDescription = item.description ? item.description.trim() : '';

        const basicInvalid = !trimmedInfo || !trimmedDescription;
        const extraInvalidForType2 = item.type === 2 && (!item.info2 || !item.info3);
        if (basicInvalid || extraInvalidForType2) {
          return true;
        }
      }
      return false;
    }
    return true;
  }

  openTermsAndConditions(event: Event): void {
    event.preventDefault();
    alert('Hiển thị điều khoản và điều kiện ở đây hoặc mở một trang mới.');
  }

  resetForm(): void {
    this.reportType = 'single';
    this.singleReportItem = {
      type: 1,
      info: '',
      emailAuthorReport: '',
      description: '',
      selectedFiles: [],
    };
    this.groupReportItems = [];
    this.addGroupReportItem();

    this.emailAuthorReportGroup = '';
    this.descriptionGroup = '';
    this.scamAmountGroup = null;
    this.selectedFilesGroup = [];
    this.agreeTerms = false;
    this.captchaToken = '';
    this.selectedCategoryId = null;
  }
}