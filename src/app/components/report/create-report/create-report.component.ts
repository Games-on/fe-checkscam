import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ReportService } from '../../../services/report.service';
import { ReportDTO } from '../../../dtos/report.dto';

@Component({
  selector: 'app-create-report',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  templateUrl: './create-report.component.html',
  styleUrl: './create-report.component.scss'
})
export class CreateReportComponent implements OnInit{
  info: string = '';
  type: number = 1;
  emailAuthorReport: string = '';
  reason: string = '';
  infoDescription: string = '';

  constructor(
    private reportService: ReportService,
    private router: Router
  ){}

  ngOnInit(): void {
    
  }

  createReport(){
      const reportDTO: ReportDTO = {
        info: this.info,
        emailAuthorReport: this.emailAuthorReport,
        type: this.type,
        reason: this.reason,
        infoDescription: this.infoDescription
      };
      this.reportService.createReport(reportDTO).subscribe({
        next: () => {
          debugger
          alert("Gửi báo cáo thành công")
          this.router.navigate(['/chatbot']);
        },
        error: (error) => {
          debugger
          alert(error.error);
        }
      })
    }
}
