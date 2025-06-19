import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RankingService, ReporterRanking, RankingStats } from '../../services/ranking.service';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  
  // Dữ liệu từ API
  topReporters: ReporterRanking[] = [];
  currentPageReporters: ReporterRanking[] = [];
  
  // Pagination
  currentPage: number = 0; // API bắt đầu từ 0
  itemsPerPage: number = 10;
  totalPages: number = 0;
  totalElements: number = 0;
  
  // Stats
  stats: RankingStats = {
    totalReporters: 0,
    totalApprovedReports: 0,
    averageSuccessRate: 0
  };
  
  // Loading states
  isLoading: boolean = false;
  isLoadingStats: boolean = false;
  error: string | null = null;

  constructor(
    private router: Router,
    private rankingService: RankingService
  ) { }

  ngOnInit(): void {
    this.loadTop3Reporters();
    this.loadCurrentPageData();
    this.loadStats();
  }

  // Tải top 3 để hiển thị podium
  loadTop3Reporters(): void {
    this.rankingService.getTop3Reporters().subscribe({
      next: (data) => {
        this.topReporters = data;
      },
      error: (error) => {
        console.error('Error loading top 3 reporters:', error);
        this.error = 'Không thể tải danh sách top 3';
      }
    });
  }

  // Tải dữ liệu cho trang hiện tại
  loadCurrentPageData(): void {
    this.isLoading = true;
    this.rankingService.getReporterRanking(this.currentPage, this.itemsPerPage).subscribe({
      next: (response) => {
        this.currentPageReporters = response.reporters;
        this.totalPages = response.totalPages;
        this.totalElements = response.totalElements;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading ranking data:', error);
        this.error = 'Không thể tải dữ liệu bảng xếp hạng';
        this.isLoading = false;
      }
    });
  }

  // Tải thống kê tổng quan
  loadStats(): void {
    this.isLoadingStats = true;
    this.rankingService.getRankingStats().subscribe({
      next: (data) => {
        this.stats = data;
        this.isLoadingStats = false;
      },
      error: (error) => {
        console.error('Error loading stats:', error);
        this.isLoadingStats = false;
      }
    });
  }

  // Lấy dữ liệu cho trang hiện tại
  getCurrentPageData(): ReporterRanking[] {
    return this.currentPageReporters;
  }

  // Chuyển trang
  goToPage(page: number): void {
    if (page >= 0 && page < this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      this.loadCurrentPageData();
    }
  }

  // Trang trước
  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadCurrentPageData();
    }
  }

  // Trang sau
  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadCurrentPageData();
    }
  }

  // Lấy danh sách số trang để hiển thị
  getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisible = 5;
    const half = Math.floor(maxVisible / 2);
    
    let start = Math.max(0, this.currentPage - half);
    let end = Math.min(this.totalPages - 1, start + maxVisible - 1);
    
    // Điều chỉnh start nếu end đã đạt max
    if (end - start + 1 < maxVisible) {
      start = Math.max(0, end - maxVisible + 1);
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    return pages;
  }

  // Lấy class CSS cho rank  
  getRankClass(rank: number): string {
    if (rank <= 3) return 'top-three';
    if (rank <= 10) return 'top-ten';
    return '';
  }

  // Lấy icon medal cho top 3
  getMedalIcon(rank: number): string {
    switch (rank) {
      case 1: return 'fas fa-trophy';
      case 2: return 'fas fa-medal';
      case 3: return 'fas fa-award';
      default: return '';
    }
  }

  // Lấy thống kê để hiển thị
  getTotalReporters(): string {
    return this.stats.totalReporters.toLocaleString('vi-VN');
  }

  getTotalApprovedReports(): string {
    return this.stats.totalApprovedReports.toLocaleString('vi-VN');
  }

  getAverageSuccessRate(): string {
    return this.stats.averageSuccessRate.toFixed(1) + '%';
  }

  // Lấy thời gian hiện tại
  getCurrentTime(): string {
    const now = new Date();
    return now.toLocaleDateString('vi-VN') + ' ' + now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
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

  // Lấy thông tin phân trang
  getPaginationInfo(): string {
    const start = this.currentPage * this.itemsPerPage + 1;
    const end = Math.min((this.currentPage + 1) * this.itemsPerPage, this.totalElements);
    return `Hiển thị ${start}-${end} trong tổng số ${this.totalElements} người báo cáo`;
  }

  // Format ngày tháng
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN');
  }

  // Reload dữ liệu
  reloadData(): void {
    this.loadTop3Reporters();
    this.loadCurrentPageData();
    this.loadStats();
  }
}
