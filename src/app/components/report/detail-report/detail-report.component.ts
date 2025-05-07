import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../../services/report.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InformationTypeToStringPipe } from '../../shareds/pipes/information-type-to-string.pipe';

@Component({
  selector: 'app-detail-report',
  imports: [
    CommonModule,
    RouterModule,
    InformationTypeToStringPipe
],
  templateUrl: './detail-report.component.html',
  styleUrl: './detail-report.component.scss'
})
export class DetailReportComponent implements OnInit{
  report: any = {};

  constructor(
    private reportService: ReportService,
    private route: ActivatedRoute,
  ){}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadReportById(id);
  }

  loadReportById(id: number){
    this.reportService.getReportById(id).subscribe({
      next: (response) => {
        debugger
        this.report = response.data;
      },
      error: (error) => {
        debugger
        alert(error.error);
      }
    });
  }
}
