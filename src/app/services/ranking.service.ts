import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export interface ReporterRanking {
  rank: number;
  email: string;
  approvedReports: number;
  totalReports: number;
  successRate: number;
  firstReportDate: string;
  lastReportDate: string;
}

export interface RankingPageResponse {
  reporters: ReporterRanking[];
  currentPage: number;
  totalPages: number;
  totalElements: number;
  pageSize: number;
}

export interface RankingStats {
  totalReporters: number;
  totalApprovedReports: number;
  averageSuccessRate: number;
}

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  private apiUrl = 'http://localhost:8080/api/v1/report';

  constructor(private http: HttpClient) { }

  /**
   * Lấy bảng xếp hạng với phân trang
   * @param page Trang (bắt đầu từ 0)
   * @param size Số lượng phần tử mỗi trang
   */
  getReporterRanking(page: number = 0, size: number = 10): Observable<RankingPageResponse> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    
    const url = `${this.apiUrl}/ranking`;
    console.log('Calling API:', url, { page, size });
    
    return this.http.get<RankingPageResponse>(url, { params })
      .pipe(
        tap(response => console.log('API Response:', response)),
        catchError(this.handleError)
      );
  }

  /**
   * Lấy top 3 người báo cáo để hiển thị podium
   */
  getTop3Reporters(): Observable<ReporterRanking[]> {
    const url = `${this.apiUrl}/ranking/top3`;
    console.log('Calling API:', url);
    
    return this.http.get<ReporterRanking[]>(url)
      .pipe(
        tap(response => console.log('Top 3 Response:', response)),
        catchError(this.handleError)
      );
  }

  /**
   * Lấy thống kê tổng quan
   */
  getRankingStats(): Observable<RankingStats> {
    const url = `${this.apiUrl}/ranking/stats`;
    console.log('Calling API:', url);
    
    return this.http.get<RankingStats>(url)
      .pipe(
        tap(response => console.log('Stats Response:', response)),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API Error:', error);
    
    let errorMessage = 'Lỗi không xác định';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Lỗi client: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Lỗi server: ${error.status} - ${error.message}`;
      
      if (error.status === 0) {
        errorMessage = 'Không thể kết nối tới server. Kiểm tra xem backend đã chạy chưa?';
      } else if (error.status === 404) {
        errorMessage = 'API endpoint không tồn tại';
      } else if (error.status === 401) {
        errorMessage = 'Không có quyền truy cập';
      }
    }
    
    return throwError(() => errorMessage);
  }
}
