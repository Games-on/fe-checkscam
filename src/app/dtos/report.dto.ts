import { ReportDetailItemDTO } from "./group-report-request.dto";

// src/app/dtos/report.dto.ts
export interface ReportDTO {
  info: string;
  pageToReport?: string;
  emailAuthorReport: string;
  type: 1 | 2 | 3;
  description: string;
  captchaToken: string;
  info2?: string;
  info3?: string;
  scamAmount?: number | null;
  categoryId: number;
  reportDetails?: ReportDetailItemDTO[]; 

}