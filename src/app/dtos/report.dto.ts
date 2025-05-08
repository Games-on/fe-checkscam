export interface ReportDTO {
    info: string;
    emailAuthorReport: string;
    type: number;
    reason: string;
    infoDescription: string;
    captchaToken: string;
    info2?: string; // Tên chủ tài khoản nếu có
    info3?: string; // Ngân hàng nếu có
}