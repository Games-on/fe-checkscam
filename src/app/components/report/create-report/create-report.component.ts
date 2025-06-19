import { CommonModule } from '@angular/common';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RecaptchaModule } from 'ng-recaptcha';
import { HttpErrorResponse } from '@angular/common/http';
import { ReportService } from '../../../services/report.service';
import { ReportDTO } from '../../../dtos/report.dto';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from "../../footer/footer.component";
import { ChatBoxComponent } from "../../chat-box/chat-box.component";

@Component({
  selector: 'app-create-report',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, RecaptchaModule, FooterComponent, HeaderComponent, ChatBoxComponent],
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.scss']
})
export class CreateReportComponent implements OnInit {

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;


  info = '';
  type = 1;
  emailAuthorReport = '';
  reason = '';
  infoDescription = '';
  accountHolderName = '';
  bankName = '';
  showChatbox: boolean = false;

  pageToReport: string = '';

  agreeTerms: boolean = false;


  selectedFiles: File[] = [];
  captchaToken = '';

  constructor(private reportService: ReportService, private router: Router) { }

  ngOnInit(): void {
  }

  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFiles = Array.from(input.files);
      console.log('Files selected by click:', this.selectedFiles);
    }
    input.value = '';
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault(); 
    event.stopPropagation();
    const target = event.currentTarget as HTMLElement; 
    if (target && target.classList.contains('drop-zone')) {
      target.classList.add('drag-over');
    }
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const target = event.currentTarget as HTMLElement;
    if (target && target.classList.contains('drop-zone')) {
      target.classList.remove('drag-over');
    }
  }

  onDrop(event: DragEvent): void {
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
        this.selectedFiles = imageFiles;
        console.log('Files dropped:', this.selectedFiles);
      } else {
        alert("Chỉ chấp nhận các tệp hình ảnh (PNG, JPG, GIF).");
      }
    }
  }


  handleCaptchaResponse(token: string | null): void {
    this.captchaToken = token ?? '';
  }

  createReport(): void {
    if (this.isFormInvalid()) {
      alert('Vui lòng điền đầy đủ các trường bắt buộc và đồng ý với điều khoản.');
      return;
    }

    const info2 = this.type === 2 ? this.accountHolderName : undefined;
    const info3 = this.type === 2 ? this.bankName : undefined;

    const reportDTO: ReportDTO = {
      info: this.info,
      pageToReport: this.pageToReport, // << Thêm trường này
      emailAuthorReport: this.emailAuthorReport,
      type: this.type,
      reason: this.reason,
      infoDescription: this.infoDescription,
      captchaToken: this.captchaToken,
      info2,
      info3
    };

    this.reportService.createReport(reportDTO).subscribe({
      next: (res: any) => {
        alert('Gửi thông tin báo cáo thành công!');
        const reportId = res.data?.id ?? res.id;
        if (!reportId) {
          alert('Không nhận được ID báo cáo từ server.');
          return;
        }
        if (this.selectedFiles.length) {
          this.uploadFiles(reportId);
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

  private uploadFiles(reportId: number | string): void {
    const formData = new FormData();
    this.selectedFiles.forEach(f => formData.append('files', f, f.name));

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
    const basicInvalid = !this.info || !this.reason || !this.pageToReport || !this.emailAuthorReport || !this.infoDescription;
    const extraInvalidForType2 = this.type === 2 && (!this.accountHolderName || !this.bankName);
    const captchaInvalid = !this.captchaToken;
    const termsNotAgreed = !this.agreeTerms; 

    return basicInvalid || extraInvalidForType2 || captchaInvalid || termsNotAgreed;
  }
  resetForm(): void {
    this.info = '';
    this.type = 1;
    this.emailAuthorReport = '';
    this.reason = '';
    this.infoDescription = '';
    this.accountHolderName = '';
    this.bankName = '';
    this.pageToReport = ''; 
    this.agreeTerms = false; 
    this.selectedFiles = [];
    this.captchaToken = ''; 
  }

  onAiTuVanClicked() {
    this.showChatbox = true;
  }


  closeChatbox() {
    this.showChatbox = false;
  }
}