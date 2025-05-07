import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReportService } from '../../services/report.service';
import { ReportStatusToStringPipe } from "../shareds/pipes/report-status-to-string.pipe";

@Component({
  selector: 'app-report',
  imports: [
    CommonModule,
    RouterModule,
    ReportStatusToStringPipe
],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent implements OnInit {
  reports: any[] = [];
  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.loadAllReports();
  }

  loadAllReports() {
    this.reportService.getListReports().subscribe({
      next: (response) => {
        debugger
        this.reports = response.data;
      },
      error: (error) => {
        debugger
        alert(error.error);
      }
    })
  }
}
