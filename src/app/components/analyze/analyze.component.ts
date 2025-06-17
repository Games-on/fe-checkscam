import { Component, OnInit, OnDestroy } from '@angular/core'; // Thêm OnDestroy
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component'; // Đảm bảo đường dẫn này đúng
import { FormsModule } from '@angular/forms'; // <-- Rất quan trọng: Thêm FormsModule để sử dụng [(ngModel)]

// import { AnalyzeService } from '../../services/analyze.service'; // Uncomment nếu bạn có AnalyzeService thực tế

interface AnalysisResult {
  info: string;
  type: number; // 0: phone, 1: url, 2: bank, 3: unknown (hoặc theo định nghĩa của API)
  description: string; // Đây có thể là mô tả ngắn gọn
  reportDescription: string; // Từ AI Analysis Summary
  moneyScam: string;
  dateReport: string | null;
  verifiedCount: number;
  lastReportAt: string;
  evidenceURLs: string[];
  analysis: string; // Chuỗi lớn chứa Phân tích chi tiết, Khuyến nghị, v.v.
  categorization?: string;
  trustScore?: number;
  dataBreach?: string;
  phishingList?: string;
  apwgCategory?: string;
  screenshotCaption?: string;
}

@Component({
  selector: 'app-analyze',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RouterModule,
    FormsModule // <-- Thêm FormsModule vào đây
  ],
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.scss']
})
export class AnalyzeComponent implements OnInit, OnDestroy { // Thêm OnDestroy
  analysisResult: AnalysisResult | null = null;
  inputType: number | undefined; // Kiểu input của kết quả HIỆN TẠI đang hiển thị (từ URL hoặc state)
  inputInfo: string | undefined; // Thông tin input của kết quả HIỆN TẠI đang hiển thị

  // Biến cho ô tra cứu MỚI trên trang analyze
  currentSearchType: number = 3; // Mặc định là URL (Link/Website) cho ô tra cứu mới
  currentSearchInfo: string = ''; // Nội dung nhập vào ô tra cứu mới
  isDropdownOpen: boolean = false; // Trạng thái của dropdown trong ô tra cứu

  riskLevelDescription: string = 'Đang tải dữ liệu...'; // Mặc định khi chưa có dữ liệu
  detailedAnalysis: string = 'Đang tải dữ liệu phân tích chi tiết...';
  recommendations: string = 'Đang tải khuyến nghị...';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    // private analyzeService: AnalyzeService // Uncomment và inject service của bạn ở đây
  ) {
    // Lắng nghe các thay đổi của queryParams
    this.route.queryParams.subscribe(params => {
      this.inputInfo = params['info'] || 'Không xác định';
      this.inputType = parseInt(params['type'], 10) || 3; // Mặc định là URL nếu không có

      // Cập nhật giá trị ô tìm kiếm mới theo kết quả hiện tại
      // Điều này giúp ô tìm kiếm hiển thị thông tin mà người dùng vừa tìm kiếm
      this.currentSearchInfo = this.inputInfo ?? '';
      this.currentSearchType = this.inputType;

      // Xóa dữ liệu cũ trong khi chờ dữ liệu mới
      this.analysisResult = null;
      this.riskLevelDescription = 'Đang tải dữ liệu...';
      this.detailedAnalysis = 'Đang tải dữ liệu phân tích chi tiết...';
      this.recommendations = 'Đang tải khuyến nghị...';


      // *** Đây là nơi bạn sẽ gọi API của mình khi refresh/truy cập trực tiếp hoặc khi URL thay đổi ***
      // Ví dụ:
      // if (this.inputInfo && this.inputType !== undefined && this.inputInfo !== 'Không xác định') {
      //   this.analyzeService.analyze(this.inputInfo, this.inputType).subscribe({
      //     next: (data: AnalysisResult) => {
      //       this.analysisResult = data;
      //       if (this.analysisResult.analysis) {
      //         this.parseAnalysisString(this.analysisResult.analysis);
      //       } else {
      //         this.riskLevelDescription = 'Không có dữ liệu phân tích.';
      //         this.detailedAnalysis = 'Không có thông tin phân tích chi tiết.';
      //         this.recommendations = 'Không có khuyến nghị.';
      //       }
      //     },
      //     error: (err) => {
      //       console.error('Lỗi khi tải dữ liệu phân tích:', err);
      //       this.riskLevelDescription = 'Lỗi tải dữ liệu.';
      //       this.detailedAnalysis = 'Không thể tải thông tin phân tích chi tiết.';
      //       this.recommendations = 'Không thể tải khuyến nghị.';
      //     }
      //   });
      // } else {
          // Nếu không có đủ thông tin để gọi API (ví dụ: queryParams trống rỗng)
          this.riskLevelDescription = 'Vui lòng nhập thông tin để phân tích.';
          this.detailedAnalysis = 'Chưa có thông tin để hiển thị phân tích chi tiết.';
          this.recommendations = 'Chưa có khuyến nghị.';
      // }

      // Logic để ưu tiên state nếu có (ví dụ khi navigate từ Home)
      // Nếu bạn muốn dữ liệu từ state được ưu tiên (không bị ghi đè bởi queryParams nếu giống nhau)
      // thì bạn cần kiểm tra state trước khi subscribe queryParams.
      // Tuy nhiên, việc lắng nghe queryParams là cách tốt nhất để đảm bảo trang luôn đồng bộ với URL.
      // Nếu dữ liệu được truyền qua state, bạn có thể thiết lập this.analysisResult một lần duy nhất
      // và sau đó không cần gọi lại API nếu queryParams không thay đổi.
      // Để đơn giản và hiệu quả, tôi đã cấu hình `queryParams.subscribe` để luôn là nguồn dữ liệu chính.
      // Nếu bạn có navigate.extras.state và muốn nó ưu tiên, bạn có thể thêm logic kiểm tra `navigation` ở đây.
      const navigation = this.router.getCurrentNavigation();
      if (navigation?.extras?.state && navigation.extras.state['result']) {
        this.analysisResult = navigation.extras.state['result'];
        // inputType và inputInfo đã được cập nhật từ queryParams
        if (this.analysisResult && this.analysisResult.analysis) {
          this.parseAnalysisString(this.analysisResult.analysis);
        }
      }
    });
  }

  ngOnInit(): void {
    // Đăng ký listener để đóng dropdown khi click ra ngoài
    document.addEventListener('click', this.onDocumentClick.bind(this));
  }

  ngOnDestroy(): void {
    // Xóa listener để tránh memory leak
    document.removeEventListener('click', this.onDocumentClick.bind(this));
  }

  onDocumentClick(event: Event): void {
    // Đóng dropdown nếu click ra ngoài khu vực dropdown
    const target = event.target as HTMLElement;
    // Kiểm tra xem click có phải từ bên trong dropdown-analyze hay không
    if (!target.closest('.dropdown-analyze') && this.isDropdownOpen) {
      this.isDropdownOpen = false;
    }
  }

  // Phương thức mới để xử lý dropdown của ô tra cứu
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectSearchInputType(type: number): void {
    this.currentSearchType = type;
    this.isDropdownOpen = false; // Đóng dropdown sau khi chọn
  }

  // Phương thức mới để xử lý tìm kiếm từ ô trên trang analyze
  analyzeNewInput(): void {
    if (this.currentSearchInfo && this.currentSearchInfo.trim() !== '') {
      // Điều hướng đến trang analyze với thông tin mới
      this.router.navigate(['/analyze'], {
        queryParams: { info: this.currentSearchInfo.trim(), type: this.currentSearchType }
      });
      // Logic subscribe queryParams trong constructor sẽ tự động tải lại dữ liệu
    } else {
      alert('Vui lòng nhập thông tin cần phân tích.');
    }
  }

  // Hàm helper để lấy label cho loại input trong ô tìm kiếm mới
  getSelectedInputTypeLabel(type: number | undefined): string {
    switch (type) {
      case 1: return 'Số điện thoại';
      case 2: return 'Tài khoản ngân hàng';
      case 3: return 'Link / Website';
      default: return 'Link / Website'; // Mặc định nếu không xác định
    }
  }

  // Hàm helper để lấy icon cho loại input trong ô tìm kiếm mới
  getSearchInputTypeIcon(): string {
    switch (this.currentSearchType) {
      case 1: return 'fas fa-mobile-alt';
      case 2: return 'fas fa-university';
      case 3: return 'fas fa-globe';
      default: return 'fas fa-question-circle';
    }
  }

  // Các hàm parseAnalysisString, getSafetyStatus, getRiskColor, getInputTypeIcon (cũ) được giữ nguyên

  private parseAnalysisString(analysisText: string): void {
    // Trích xuất "Mức độ nguy hiểm"
    const riskLevelRegex = /- \*\*Mức độ nguy hiểm:\*\*(.*?)\./i;
    const riskMatch = analysisText.match(riskLevelRegex);
    if (riskMatch && riskMatch[0]) {
      this.riskLevelDescription = riskMatch[0].trim();
    } else {
      this.riskLevelDescription = "**Mức độ nguy hiểm:** Không xác định.";
    }

    // Trích xuất "2. Phân tích chi tiết"
    const detailedAnalysisRegex = /(2\. Phân tích chi tiết:[\s\S]*?)(?=3\. Loại hình lừa đảo:|$)/i;
    const detailedAnalysisMatch = analysisText.match(detailedAnalysisRegex);
    if (detailedAnalysisMatch && detailedAnalysisMatch[1]) {
        this.detailedAnalysis = detailedAnalysisMatch[1].trim();
    } else {
        this.detailedAnalysis = "2. Phân tích chi tiết: Không có thông tin phân tích chi tiết.";
    }

    // Trích xuất "5. Khuyến nghị"
    const recommendationsRegex = /(5\. Khuyến nghị:[\s\S]*)/i;
    const recommendationsMatch = analysisText.match(recommendationsRegex);
    if (recommendationsMatch && recommendationsMatch[1]) {
        this.recommendations = recommendationsMatch[1].trim();
    } else {
        this.recommendations = "5. Khuyến nghị: Không có khuyến nghị.";
    }
  }

  getSafetyStatus(): string {
    if (this.riskLevelDescription) {
      const lowerCaseDescription = this.riskLevelDescription.toLowerCase();
      if (lowerCaseDescription.includes('an toàn') || lowerCaseDescription.includes('0/10')) {
        return 'An toàn';
      } else if (lowerCaseDescription.includes('nguy hiểm: thấp') || lowerCaseDescription.includes('nguy cơ thấp')) {
        return 'Nguy cơ thấp';
      } else if (lowerCaseDescription.includes('nguy hiểm: trung bình') || lowerCaseDescription.includes('nguy cơ trung bình')) {
        return 'Nguy cơ trung bình';
      } else if (lowerCaseDescription.includes('nguy hiểm: cao') || lowerCaseDescription.includes('nguy cơ cao')) {
        return 'Nguy cơ cao';
      }
    }
    return 'Đang phân tích...'; // Mặc định nếu không khớp hoặc riskLevelDescription rỗng
  }

  getRiskColor(): string {
    if (this.riskLevelDescription) {
      const lowerCaseDescription = this.riskLevelDescription.toLowerCase();
      if (lowerCaseDescription.includes('an toàn') || lowerCaseDescription.includes('0/10')) {
        return 'green';
      } else if (lowerCaseDescription.includes('nguy hiểm: thấp') || lowerCaseDescription.includes('nguy cơ thấp')) {
        return 'yellowgreen';
      } else if (lowerCaseDescription.includes('nguy hiểm: trung bình') || lowerCaseDescription.includes('nguy cơ trung bình')) {
        return 'orange';
      } else if (lowerCaseDescription.includes('nguy hiểm: cao') || lowerCaseDescription.includes('nguy cơ cao')) {
        return 'red';
      }
    }
    return 'gray'; // Mặc định nếu không khớp hoặc riskLevelDescription rỗng
  }

  getInputTypeIcon(): string {
    switch (this.inputType) {
      case 1: return 'fas fa-mobile-alt'; // Phone
      case 2: return 'fas fa-university'; // Bank account
      case 3: return 'fas fa-globe'; // URL
      default: return 'fas fa-question-circle'; // Unknown or default
    }
  }
}