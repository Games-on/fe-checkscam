import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

interface ReporterRanking {
  rank: number;
  email: string;
  approvedReports: number;
  totalReports: number;
  successRate: number;
  firstReportDate: string;
  lastReportDate: string;
}

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  
  // Top 100 email có nhiều báo cáo được duyệt nhất
  topReporters: ReporterRanking[] = [];
  
  // Pagination - bắt đầu từ rank 21 (vì top 3 hiển thị riêng, rank 4-20 ẩn)
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 0;

  constructor(private router: Router) { 
    this.generateMockData();
  }

  ngOnInit(): void {
    this.calculatePagination();
  }

  // Tạo dữ liệu mẫu cho 100 email
  generateMockData(): void {
    const emailDomains = [
      'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'email.com'
    ];
    
    const usernames = [
      'nguyenchicong035', 'sadboydev06', 'nhatp3067', 'thanhphat.199x', 
      'tranminhhung170302', 'lph.an.1092', 'sonmtb', 'thaing84',
      'hthai1426', 'ltrvinh288', 'nhangaming125', 'maim88487', 'asdsasd'
    ];

    // Tạo top performers với điểm cao
    const topScores = [184, 146, 78]; // Giống như trong hình
    
    for (let i = 1; i <= 100; i++) {
      let approvedReports: number;
      let email: string;
      
      if (i <= 3) {
        // Top 3 với điểm như trong hình
        approvedReports = topScores[i - 1];
        email = usernames[i - 1] + '@gmail.com';
      } else if (i <= 13) {
        // Sử dụng username có sẵn
        email = usernames[i - 1] + '@' + emailDomains[Math.floor(Math.random() * emailDomains.length)];
        approvedReports = Math.floor(Math.random() * 50) + 20; // 20-70 điểm
      } else {
        // Random cho những user còn lại
        const randomUsername = 'user' + Math.floor(Math.random() * 10000);
        email = randomUsername + '@' + emailDomains[Math.floor(Math.random() * emailDomains.length)];
        approvedReports = Math.floor(Math.random() * 30) + 1; // 1-30 điểm
      }
      
      const totalReports = approvedReports + Math.floor(Math.random() * 20);
      const successRate = Math.round((approvedReports / totalReports) * 100);

      this.topReporters.push({
        rank: i,
        email: email,
        approvedReports: approvedReports,
        totalReports: totalReports,
        successRate: successRate,
        firstReportDate: this.getRandomDate(2023, 2024),
        lastReportDate: this.getRandomDate(2024, 2025)
      });
    }

    // Sắp xếp theo số báo cáo được duyệt giảm dần
    this.topReporters.sort((a, b) => b.approvedReports - a.approvedReports);
    
    // Cập nhật lại rank sau khi sắp xếp
    this.topReporters.forEach((reporter, index) => {
      reporter.rank = index + 1;
    });
  }

  getRandomDate(startYear: number, endYear: number): string {
    const start = new Date(startYear, 0, 1);
    const end = new Date(endYear, 11, 31);
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate.toLocaleDateString('vi-VN');
  }

  // Lấy dữ liệu cho trang hiện tại (bắt đầu từ rank 1)
  getCurrentPageData(): ReporterRanking[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.topReporters.slice(startIndex, endIndex);
  }

  // Tính toán phân trang (tính tất cả)
  calculatePagination(): void {
    this.totalPages = Math.ceil(this.topReporters.length / this.itemsPerPage);
  }

  // Chuyển trang
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  // Trang trước
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Trang sau
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  // Ẩn một phần email để bảo vệ privacy
  getMaskedEmail(email: string): string {
    const [local, domain] = email.split('@');
    if (local.length <= 3) {
      return `${local[0]}***@${domain}`;
    }
    const visibleStart = local.substring(0, 2);
    const visibleEnd = local.substring(local.length - 1);
    return `${visibleStart}***${visibleEnd}@${domain}`;
  }

  // Lấy avatar mặc định dựa trên email (không dùng trong design mới)
  getAvatarUrl(email: string): string {
    const name = email.split('@')[0];
    return `https://ui-avatars.com/api/?name=${name}&background=ff6b35&color=fff&size=50`;
  }
}
