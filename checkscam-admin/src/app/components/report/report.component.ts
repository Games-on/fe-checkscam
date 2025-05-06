import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-report',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent implements OnInit {
  reports: any[] = [];
  constructor() { }

  ngOnInit() {

  }
}
