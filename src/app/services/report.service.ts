import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpUtilService } from './http.util.service';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { ReportDTO } from '../dtos/report.dto';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiCreateReport = `${environment.apiBaseUrl}/report`;
  constructor(
    private http: HttpClient,
    private httpUtilService: HttpUtilService
  ) { }

  private getApiConfig() {
    return {
      headers: this.httpUtilService.createHeaders(),
    };
  }

  createReport(reportDTO: ReportDTO): Observable<any> {
      return this.http.post(this.apiCreateReport, reportDTO, this.getApiConfig());
    }
}
