import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReportService } from '../../services/report.service';
import { ReportStatusToStringPipe } from "../shareds/pipes/report-status-to-string.pipe";
import { HttpErrorResponse } from '@angular/common/http';
import { InformationTypeToStringPipe } from '../shareds/pipes/information-type-to-string.pipe';


@Component({
  selector: 'app-report',
  imports: [
    CommonModule,
    RouterModule,
    ReportStatusToStringPipe,
    InformationTypeToStringPipe
  ],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent implements OnInit {
  reports: any[] = [];

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.loadAllReports();
  }

  /* ---------- gọi API nhận danh sách ---------- */
  loadAllReports(): void {
    this.reportService.getListReports().subscribe({
      next: (res) => (this.reports = res.data || []),
      error: (err) => alert(err.error?.message || err.message || 'Lỗi tải danh sách')
    });
  }

  /* ---------- XÁC NHẬN ---------- */
  confirmReport(id: number): void {
    const body = {
      idReport: id,
      status: 2 as const,          // 2 = XÁC NHẬN
      idScamTypeAfterHandle: 1     // mặc định = 1
    };

    this.reportService.handleReport(body).subscribe({
      next: () => {
        alert('Đã xác nhận báo cáo!');
        this.loadAllReports();     // refresh bảng
      },
      error: (err: HttpErrorResponse) =>
        alert(err.error?.message || err.message || 'Lỗi xác nhận')
    });
  }

  /* ---------- TỪ CHỐI ---------- */
  rejectReport(id: number): void {
    const body = {
      idReport: id,
      status: 3 as const,          // 3 = TỪ CHỐI
      idScamTypeAfterHandle: null  // từ chối ⇒ null
    };

    this.reportService.handleReport(body).subscribe({
      next: () => {
        alert('Đã từ chối báo cáo!');
        this.loadAllReports();
      },
      error: (err: HttpErrorResponse) =>
        alert(err.error?.message || err.message || 'Lỗi từ chối')
    });
  }
}
