export interface ReportDTO {
    info: string;
    emailAuthorReport: string;
    type: number;
    reason: string;
    infoDescription: string;
    captchaToken: string;
    info2?: string; 
    info3?: string; 

    // >> Bổ sung: Thêm thuộc tính pageToReport vào đây
    pageToReport: string; // Hoặc pageToReport?: string; nếu trường này không bắt buộc gửi lên backend
}