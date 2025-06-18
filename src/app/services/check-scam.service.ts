// src/app/services/check-scam.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpUtilService } from './http.util.service';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { CheckScamRequestDTO } from '../dtos/check-scam-request.dto';

// Định nghĩa interface SearchApiResponse ở đây hoặc import từ một file riêng
// Dựa trên response API của bạn (ảnh chụp Postman và Network tab), cấu trúc là:
interface SearchApiResponse {
  info: string;
  type: number;
  description: string;
  reportDescription: string;
  moneyScam: string;
  dateReport: string | null;
  verifiedCount: number;
  lastReportAt: string;
  evidenceURLs?: string[]; // <-- Rất quan trọng: PHẢI LÀ 'evidenceURLs' với chữ hoa 'URLs'
  evidenceUrls?: string[]; // Optional for frontend compatibility
  analysis: string;
  categorization?: string;
  trustScore?: number;
  dataBreach?: string;
  phishingList?: string;
  apwgCategory?: string;
  screenshotCaption?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CheckScamService {
  private apiCheckScam = `${environment.apiBaseUrl}/check-scam`;
  private apiChat = `${environment.apiBaseUrl}/check-scam/chatbot`;

  constructor(
    private http: HttpClient,
    private httpUtilService: HttpUtilService
  ) { }

  private getApiConfig() {
    return {
      headers: this.httpUtilService.createHeaders(),
    };
  }

  // Cập nhật kiểu trả về từ Observable<any> thành Observable<SearchApiResponse>
  checkScam(checkScamRequestDTO: CheckScamRequestDTO): Observable<SearchApiResponse> {
    return this.http.post<SearchApiResponse>(this.apiCheckScam, checkScamRequestDTO, this.getApiConfig());
  }

  chat(message: string): Observable<any> {
    const chatPayload = { message: message };
    return this.http.post(this.apiChat, chatPayload, this.getApiConfig());
  }
}