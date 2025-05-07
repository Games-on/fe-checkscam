
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RecaptchaModule } from 'ng-recaptcha';
import { HttpErrorResponse } from '@angular/common/http';
import { ReportService } from '../../../services/report.service';
import { ReportDTO } from '../../../dtos/report.dto';

@Component({
  selector: 'app-create-report',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, RecaptchaModule],
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.scss']
})
export class CreateReportComponent implements OnInit {
  info = '';
  type = 1;
  emailAuthorReport = '';
  reason = '';
  infoDescription = '';
  accountHolderName = '';
  bankName = '';

  selectedFiles: File[] = [];
  captchaToken = '';

  constructor(private reportService: ReportService, private router: Router) { }

  ngOnInit(): void { }

  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedFiles = input.files ? Array.from(input.files) : [];
  }

  handleCaptchaResponse(token: string | null): void {
    this.captchaToken = token ?? '';
  }

  createReport(): void {
    if (!this.captchaToken) {
      alert('Vui lòng hoàn thành CAPTCHA');
      return;
    }
    if (this.isFormInvalid()) {
      alert('Vui lòng điền đầy đủ các trường bắt buộc.');
      return;
    }

    const info2 = this.type === 2 ? this.accountHolderName : undefined;
    const info3 = this.type === 2 ? this.bankName : undefined;

    const reportDTO: ReportDTO = {
      info: this.info,
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
          this.router.navigate(['/chatbot']);
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
        this.router.navigate(['/chatbot']);
      },
      error: (err: HttpErrorResponse) => {
        console.error('Lỗi khi tải lên tệp:', err);
        alert(`Lỗi: ${err.error?.message || err.message}`);
        this.router.navigate(['/chatbot']);
      }
    });
  }

  private isFormInvalid(): boolean {
    const basicInvalid = !this.info || !this.reason;
    const extraInvalid = this.type === 2 && (!this.accountHolderName || !this.bankName);
    return basicInvalid || extraInvalid;
  }
}