// report.dto.ts (sửa đổi, làm cho reason tùy chọn)
export interface ReportDTO {
  info: string;
  pageToReport?: string;
  emailAuthorReport: string;
  type: 1 | 2 | 3;
  reason?: string; // Đã là tùy chọn
  infoDescription: string;
  captchaToken: string;
  info2?: string;
  info3?: string;
}