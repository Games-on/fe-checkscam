export class ReportDTO {
    info: string;
    emailAuthorReport: string;
    type: number;
    reason: string;
    infoDescription: string;

    constructor(data: any) {
        this.info = data.info;
        this.emailAuthorReport = data.emailAuthorReport;
        this.type = data.type;
        this.reason = data.reason;
        this.infoDescription = data.infoDescription;
    }
}