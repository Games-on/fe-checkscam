// report.service.ts
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpUtilService } from './http.util.service';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { ReportDTO } from '../dtos/report.dto';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiBaseUrl = environment.apiBaseUrl;
  private apiCreateReport = `${this.apiBaseUrl}/report`;
  private apiCreateGroupReports = `${this.apiBaseUrl}/report/batch`; // API mới cho báo cáo gộp

  constructor(
    private http: HttpClient,
    private httpUtilService: HttpUtilService
  ) { }

  private getApiConfig() {
    return {
      headers: this.httpUtilService.createHeaders(),
    };
  }

  // API cho báo cáo đơn (giữ nguyên)
  createReport(reportDTO: ReportDTO): Observable<any> {
    return this.http.post(this.apiCreateReport, reportDTO, this.getApiConfig());
  }

  // API MỚI cho báo cáo gộp
  // Backend cần một controller nhận List<ReportDTO>
  createGroupReports(reportDTOs: ReportDTO[]): Observable<any> { // <--- THAY ĐỔI Ở ĐÂY
    return this.http.post(this.apiCreateGroupReports, reportDTOs, this.getApiConfig());
  }

  getListReports(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/report/all`);
  }

  getReportById(id: number): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/report/${id}`);
  }

  uploadFiles(reportId: number | string, formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/report/uploads/${reportId}`, formData);
  }

  handleReport(body: {
    idReport: number;
    status: 2 | 3;
    idScamTypeAfterHandle: number | null;
  }): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/report/handle`, body);
  }

  getMonthlyStats(year: number): Observable<any[]> {
    const params = new HttpParams().set('year', year.toString());
    return this.http.get<any[]>(`${this.apiBaseUrl}/report/monthly`, { params });
  }

  getYearlyStats(): Observable<{ year: number; count: number }[]> {
  return this.http.get<{ year: number; count: number }[]>(
    `${this.apiBaseUrl}/report/yearly`
  );
}
}