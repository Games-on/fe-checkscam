import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';

import { CheckScamService } from '../../services/check-scam.service';
import { CheckScamRequestDTO } from '../../dtos/check-scam-request.dto';

interface AnalysisResult {
  info: string;
  type: number;
  description: string;
  reportDescription: string;
  moneyScam: string;
  dateReport: string | null;
  verifiedCount: number;
  lastReportAt: string;
  evidenceUrls?: string[]; // Optional cho frontend
  evidenceURLs?: string[]; // Optional từ API response
  analysis: string;
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
    FormsModule
  ],
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.scss']
})
export class AnalyzeComponent implements OnInit, OnDestroy {
  analysisResult: AnalysisResult | null = null;
  inputType: number | undefined;
  inputInfo: string | undefined;
  selectedType: number = 1;

  // Biến cho ô tra cứu MỚI trên trang analyze
  currentSearchType: number = 1;
  currentSearchInfo: string = '';
  isLoading: boolean = false;
  errorMessage: string | null = null;
  imageLoaded: boolean = false;

  riskLevelDescription: string = 'Đang tải dữ liệu...';
  detailedAnalysis: string = 'Đang tải dữ liệu phân tích chi tiết...';
  recommendations: string = 'Đang tải khuyến nghị...';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private checkScamService: CheckScamService
  ) {
    this.route.queryParams.subscribe(params => {
      const info = params['info'];
      const type = params['type'];
      
      if (info && type && info !== 'Không xác định' && info.trim() !== '') {
        this.inputInfo = info;
        this.inputType = parseInt(type, 10);
        this.currentSearchInfo = this.inputInfo || '';
        this.currentSearchType = this.inputType;
        this.selectedType = this.inputType;

        this.analysisResult = null;
        this.riskLevelDescription = 'Đang tải dữ liệu...';
        this.detailedAnalysis = 'Đang tải dữ liệu phân tích chi tiết...';
        this.recommendations = 'Đang tải khuyến nghị...';

        console.log('Calling API with:', { info: this.inputInfo, type: this.inputType });
        const requestDto = new CheckScamRequestDTO({ info: this.inputInfo, type: this.inputType });
        
        this.checkScamService.checkScam(requestDto).subscribe({
          next: (data) => {
            console.log('API Response:', data);
            console.log('All keys in response:', Object.keys(data));
            
            // Normalize evidenceUrls từ API response
            const normalizedData: AnalysisResult = {
              ...data,
              evidenceUrls: data.evidenceURLs || data.evidenceUrls || []
            };
            
            this.analysisResult = normalizedData;
            if (this.analysisResult && this.analysisResult.analysis) {
              this.parseAnalysisString(this.analysisResult.analysis);
            } else {
              this.riskLevelDescription = 'Không có dữ liệu phân tích.';
              this.detailedAnalysis = 'Không có thông tin phân tích chi tiết.';
              this.recommendations = 'Không có khuyến nghị.';
            }
          },
          error: (err) => {
            console.error('Lỗi khi tải dữ liệu phân tích:', err);
            this.riskLevelDescription = 'Lỗi tải dữ liệu.';
            this.detailedAnalysis = 'Không thể tải thông tin phân tích chi tiết.';
            this.recommendations = 'Không thể tải khuyến nghị.';
          }
        });
      } else {
        this.clearData();
      }
    });
  }

  ngOnInit(): void {
    const stateData = history.state;
    console.log('History state data:', stateData);
    
    if (stateData && stateData.result) {
      console.log('Using state data from history.state');
      this.analysisResult = stateData.result;
      this.inputInfo = stateData.info;
      this.inputType = stateData.type;
      
      this.currentSearchInfo = this.inputInfo || '';
      this.currentSearchType = this.inputType || 1;
      this.selectedType = this.inputType || 1;
      
      if (this.analysisResult && this.analysisResult.analysis) {
        this.parseAnalysisString(this.analysisResult.analysis);
      }
    }

    setTimeout(() => {
      const currentParams = this.route.snapshot.queryParams;
      const info = currentParams['info'];
      const type = currentParams['type'];
      
      console.log('Current params:', { info, type });
      
      if ((info || type) && (info === 'Không xác định' || !info || info.trim() === '')) {
        console.log('Clearing invalid params...');
        this.clearAndNavigate();
      }
    }, 100);
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  clearAndNavigate(): void {
    this.router.navigate(['/analyze'], { replaceUrl: true });
    this.clearData();
  }

  private clearData(): void {
    this.inputInfo = undefined;
    this.inputType = undefined;
    this.analysisResult = null;
    this.currentSearchInfo = '';
    this.currentSearchType = 1;
    this.selectedType = 1;
    this.riskLevelDescription = 'Vui lòng nhập thông tin để phân tích.';
    this.detailedAnalysis = 'Chưa có thông tin để hiển thị phân tích chi tiết.';
    this.recommendations = 'Chưa có khuyến nghị.';
  }

  onTypeChange(): void {
    this.currentSearchInfo = '';
    this.errorMessage = null;
  }

  analyzeNewInput(): void {
    const value = this.currentSearchInfo.trim();
    if (!value) {
      this.errorMessage = 'Vui lòng nhập thông tin cần tra cứu.';
      return;
    }

    this.errorMessage = null;
    this.isLoading = true;

    if (this.currentSearchType === 1 && !this.isPhoneNumber(value)) {
      this.errorMessage = 'Số điện thoại phải bắt đầu bằng 0 và gồm 10 chữ số.';
      this.isLoading = false;
      return;
    }
    if (this.currentSearchType === 2 && !this.isBankNumber(value)) {
      this.errorMessage = 'Số tài khoản chỉ được chứa ký tự số.';
      this.isLoading = false;
      return;
    }
    if (this.currentSearchType === 3 && !this.isUrl(value)) {
      this.errorMessage = 'URL không hợp lệ (ví dụ hợp lệ: https://example.com hoặc example.vn).';
      this.isLoading = false;
      return;
    }

    this.router.navigate(['/analyze'], {
      queryParams: { info: value, type: this.currentSearchType }
    }).then(() => {
      this.isLoading = false;
    });
  }

  private isPhoneNumber(value: string): boolean {
    return /^0\d{9}$/.test(value.trim());
  }

  private isBankNumber(value: string): boolean {
    return /^\d+$/.test(value.trim());
  }

  private isUrl(value: string): boolean {
    const urlRegex = /^(https?:\/\/)?([đa-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i;
    return urlRegex.test(value.trim());
  }

  getSearchInputTypeIcon(): string {
    switch (this.currentSearchType) {
      case 1: return 'fas fa-mobile-alt';
      case 2: return 'fas fa-university';
      case 3: return 'fas fa-globe';
      default: return 'fas fa-question-circle';
    }
  }

  private parseAnalysisString(analysisText: string): void {
    const riskLevelRegex = /- \*\*Mức độ nguy hiểm:\*\*(.*?)\./i;
    const riskMatch = analysisText.match(riskLevelRegex);
    if (riskMatch && riskMatch[0]) {
      this.riskLevelDescription = riskMatch[0].trim();
    } else {
      this.riskLevelDescription = "**Mức độ nguy hiểm:** Không xác định.";
    }

    const detailedAnalysisRegex = /(2\. Phân tích chi tiết:[\s\S]*?)(?=3\. Loại hình lừa đảo:|$)/i;
    const detailedAnalysisMatch = analysisText.match(detailedAnalysisRegex);
    if (detailedAnalysisMatch && detailedAnalysisMatch[1]) {
        this.detailedAnalysis = detailedAnalysisMatch[1].trim();
    } else {
        this.detailedAnalysis = "2. Phân tích chi tiết: Không có thông tin phân tích chi tiết.";
    }

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
    return 'Đang phân tích...';
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
    return 'gray';
  }

  getFormattedDate(dateString: string | null | undefined): string {
    if (!dateString || dateString === '0001-01-01T00:00:00') {
      return 'N/A';
    }
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('vi-VN');
    } catch {
      return 'N/A';
    }
  }

  getInputTypeIcon(): string {
    switch (this.inputType) {
      case 1: return 'fas fa-mobile-alt';
      case 2: return 'fas fa-university';
      case 3: return 'fas fa-globe';
      default: return 'fas fa-question-circle';
    }
  }

  getCurrentDate(): string {
    return new Date().toLocaleDateString('vi-VN');
  }

  getScamAdviserClass(score: number | undefined): string {
    if (!score || score === 0) return 'not-found';
    if (score >= 80) return 'safe';
    if (score >= 60) return 'warning';
    if (score >= 40) return 'danger';
    return 'critical';
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    console.error('Image failed to load:', img.src);
    console.error('Error event:', event);
    
    img.style.display = 'none';
    const errorDiv = document.createElement('div');
    errorDiv.className = 'image-error';
    errorDiv.innerHTML = '<i class="fas fa-exclamation-triangle"></i><p>Không thể tải ảnh</p>';
    img.parentNode?.appendChild(errorDiv);
  }

  onImageLoad(event: Event): void {
    const img = event.target as HTMLImageElement;
    console.log('Image loaded successfully:', img.src);
    this.imageLoaded = true;
  }

  getImageName(imageUrl: string): string {
    const fileName = imageUrl.split('/').pop() || '';
    console.log('Original URL:', imageUrl);
    console.log('Extracted filename:', fileName);
    console.log('Final URL:', `http://localhost:8080/api/v1/report/image/${fileName}`);
    return fileName;
  }

  getFullImageUrl(imageUrl: string): string {
    const fileName = this.getImageName(imageUrl);
    return `http://localhost:8080/api/v1/report/image/${fileName}`;
  }

  getEvidenceImages(): string[] {
    if (!this.analysisResult) return [];
    
    const images = this.analysisResult.evidenceUrls || this.analysisResult.evidenceURLs || [];
    console.log('Evidence images found:', images);
    return images;
  }

  hasValidAnalysisData(): boolean {
    const hasData = (
      (this.analysisResult !== null) ||
      (
        this.inputInfo !== undefined && 
        this.inputType !== undefined &&
        this.inputInfo.trim() !== ''
      )
    );
    console.log('hasValidAnalysisData:', hasData);
    console.log('analysisResult:', this.analysisResult);
    console.log('evidenceUrls:', this.analysisResult?.evidenceUrls);
    return hasData;
  }

  // Method xử lý click ảnh để xem to hơn
  onImageClick(imageUrl: string): void {
    const fullUrl = this.getFullImageUrl(imageUrl);
    
    // Tạo modal để hiển thị ảnh to
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10000;
      cursor: pointer;
    `;
    
    const img = document.createElement('img');
    img.src = fullUrl;
    img.style.cssText = `
      max-width: 90%;
      max-height: 90%;
      object-fit: contain;
      border-radius: 8px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    `;
    
    const closeButton = document.createElement('div');
    closeButton.innerHTML = '×';
    closeButton.style.cssText = `
      position: absolute;
      top: 20px;
      right: 30px;
      color: white;
      font-size: 40px;
      font-weight: bold;
      cursor: pointer;
      z-index: 10001;
    `;
    
    modal.appendChild(img);
    modal.appendChild(closeButton);
    document.body.appendChild(modal);
    
    // Đóng modal khi click
    const closeModal = () => {
      document.body.removeChild(modal);
    };
    
    modal.addEventListener('click', closeModal);
    closeButton.addEventListener('click', closeModal);
    
    // Thêm animation
    modal.style.opacity = '0';
    setTimeout(() => {
      modal.style.transition = 'opacity 0.3s ease';
      modal.style.opacity = '1';
    }, 10);
  }

  // Method chuyển đổi markdown thành HTML
  formatText(text: string): string {
    if (!text) return '';
    
    // Chuyển **text** thành <strong>text</strong>
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Chuyển *text* thành <em>text</em>
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Chuyển \n thành <br>
    formatted = formatted.replace(/\n/g, '<br>');
    
    return formatted;
  }
}
