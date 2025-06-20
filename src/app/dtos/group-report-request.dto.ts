
export interface ReportDetailItemDTO {
  type: 1 | 2 | 3;
  info: string;
  description: string;
  info2?: string;
  info3?: string;
}

export interface GroupReportRequestDTO {
  description: string;
  emailAuthorReport: string;
  scamAmount?: number | null;
  captchaToken: string;
  reportDetails: ReportDetailItemDTO[];
  categoryId: number;
}