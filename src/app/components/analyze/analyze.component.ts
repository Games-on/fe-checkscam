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
  screenshot?: string; // Thêm field screenshot cho URL (chữ s thường)
  screenShot?: string; // Thêm field screenShot cho URL (chữ S hoa)
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
  showAllImagesFlag: boolean = false;  // Flag để hiển thị tất cả ảnh
  maxDisplayImages: number = 4;        // Số ảnh tối đa hiển thị

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
          next: (data: any) => { // Thêm type any để tránh lỗi
          console.log('API Response:', data);
          console.log('All keys in response:', Object.keys(data));
          console.log('Screenshot field value:', data.screenshot);
          console.log('ScreenShot field value:', data.screenShot);
          console.log('EvidenceUrls field value:', data.evidenceUrls);
          console.log('EvidenceURLs field value:', data.evidenceURLs);
          console.log('Full API Response JSON:', JSON.stringify(data, null, 2));
          
          // Normalize evidenceUrls từ API response
          const normalizedData: AnalysisResult = {
            ...data,
            evidenceUrls: data.evidenceURLs || data.evidenceUrls || [],
            screenshot: data.screenshot || data.screenShot // Support cả 2 field
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
    
    // Test URL trực tiếp
    console.log('Testing image URL directly...');
    fetch(img.src)
      .then(response => {
        console.log('Image URL response status:', response.status);
        console.log('Image URL response headers:', response.headers);
        return response.blob();
      })
      .then(blob => {
        console.log('Image blob size:', blob.size);
        console.log('Image blob type:', blob.type);
      })
      .catch(error => {
        console.error('Fetch image error:', error);
      });
    
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
    
    // Remove loading class from parent container
    const container = img.closest('.image-container');
    if (container) {
      container.classList.remove('loading');
    }
  }

  getImageName(imageUrl: string): string {
    const fileName = imageUrl.split('/').pop() || '';
    console.log('Original URL:', imageUrl);
    console.log('Extracted filename:', fileName);
    console.log('Final URL:', `http://localhost:8080/api/v1/report/image/${fileName}`);
    return fileName;
  }

  getFullImageUrl(imageUrl: string): string {
    console.log(`Creating URL for type ${this.analysisResult?.type}, imageUrl:`, imageUrl);
    
    // Kiểm tra theo type của request
    if (this.analysisResult?.type === 3) {
      // Type 3 (URL): screenshot luôn bắt đầu bằng /cache/
      const fullUrl = `http://localhost:8080/api/v1/check-scam${imageUrl}`;
      console.log('Type 3 - Full URL:', fullUrl);
      return fullUrl;
    } else {
      // Type 1,2 (Số điện thoại, Tài khoản): evidenceUrls cần lấy filename
      const fileName = this.getImageName(imageUrl);
      const fullUrl = `http://localhost:8080/api/v1/report/image/${fileName}`;
      console.log(`Type ${this.analysisResult?.type} - Full URL:`, fullUrl);
      return fullUrl;
    }
  }

  getEvidenceImages(): string[] {
    if (!this.analysisResult) return [];
    
    let images: string[] = [];
    
    // Kiểm tra theo type của request
    if (this.analysisResult.type === 1 || this.analysisResult.type === 2) {
      // Type 1 (Số điện thoại) và Type 2 (Số tài khoản): lấy từ evidenceUrls
      images = this.analysisResult.evidenceUrls || this.analysisResult.evidenceURLs || [];
      console.log(`Type ${this.analysisResult.type} - Evidence images from evidenceUrls:`, images);
    } else if (this.analysisResult.type === 3) {
      // Type 3 (URL): lấy từ screenshot
      console.log('=== DEBUG URL SCREENSHOT ===');
      console.log('Current URL being analyzed:', this.analysisResult.info);
      console.log('Screenshot field exists:', 'screenshot' in this.analysisResult);
      console.log('Screenshot field value:', this.analysisResult.screenshot);
      console.log('Screenshot field type:', typeof this.analysisResult.screenshot);
      console.log('ScreenShot field exists:', 'screenShot' in this.analysisResult);
      console.log('ScreenShot field value:', this.analysisResult.screenShot);
      console.log('ScreenShot field type:', typeof this.analysisResult.screenShot);
      
      // Kiểm tra cả 2 field
      const screenshotValue = this.analysisResult.screenshot || this.analysisResult.screenShot;
      console.log('Combined screenshot value:', screenshotValue);
      console.log('Combined screenshot type:', typeof screenshotValue);
      
      if (screenshotValue && 
          screenshotValue.trim() !== '' &&
          screenshotValue !== 'null') {
        
        // Nếu là "default", tạo một placeholder image
        if (screenshotValue === 'default') {
          console.log('Backend returned "default" - using placeholder');
          images = []; // Không hiển thị ảnh, chỉ hiển thị placeholder text
        } else {
          images = [screenshotValue];
          console.log('Screenshot found and valid, adding to images');
        }
        console.log(`Type ${this.analysisResult.type} - Screenshot processing result:`, images);
      } else {
        console.log(`Type ${this.analysisResult.type} - No valid screenshot found`);
        console.log('Rejection reason:');
        console.log('- Is null/undefined:', !screenshotValue);
        console.log('- Is "default":', screenshotValue === 'default');
        console.log('- Is empty string:', screenshotValue?.trim() === '');
        console.log('- Is "null" string:', screenshotValue === 'null');
        
        // Hiển thị tất cả fields có chứa "shot", "image", "capture"
        const allFields = Object.keys(this.analysisResult);
        const imageRelatedFields = allFields.filter(key => 
          key.toLowerCase().includes('shot') || 
          key.toLowerCase().includes('image') || 
          key.toLowerCase().includes('capture') ||
          key.toLowerCase().includes('screen')
        );
        console.log('Image-related fields found:', imageRelatedFields);
        imageRelatedFields.forEach(field => {
          console.log(`${field}:`, this.analysisResult?.[field as keyof AnalysisResult]);
        });
      }
      console.log('=== END DEBUG ===');
    }
    
    console.log('Final evidence images:', images);
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

  // Method xử lý click ảnh để xem to hơn - Enhanced version
  onImageClick(imageUrl: string): void {
    const fullUrl = this.getFullImageUrl(imageUrl);
    
    // Tạo modal container với enhanced styling
    const modal = document.createElement('div');
    modal.className = 'image-modal-enhanced';
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10000;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.3s ease;
      backdrop-filter: blur(5px);
    `;
    
    // Container cho ảnh với loading state
    const imageContainer = document.createElement('div');
    imageContainer.style.cssText = `
      position: relative;
      max-width: 95vw;
      max-height: 95vh;
      display: flex;
      justify-content: center;
      align-items: center;
    `;
    
    // Loading spinner
    const loadingSpinner = document.createElement('div');
    loadingSpinner.innerHTML = `
      <div style="
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        font-size: 18px;
      ">
        <i class="fas fa-spinner fa-spin" style="font-size: 2em; margin-bottom: 10px;"></i>
        <span>Đang tải ảnh...</span>
      </div>
    `;
    imageContainer.appendChild(loadingSpinner);
    
    // Main image với zoom functionality - Hiển thị ảnh với kích thước gốc
    const img = document.createElement('img');
    img.style.cssText = `
      max-width: 90vw;  /* Để ảnh hiện thị lớn hơn */
      max-height: 90vh;
      width: auto;      /* Tự động điều chỉnh width */
      height: auto;     /* Tự động điều chỉnh height */
      object-fit: contain;
      border-radius: 12px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: opacity 0.3s ease, transform 0.3s ease;
      cursor: zoom-in;
    `;
    
    // Close button với enhanced styling
    const closeButton = document.createElement('div');
    closeButton.innerHTML = '×';
    closeButton.style.cssText = `
      position: absolute;
      top: 20px;
      right: 30px;
      color: white;
      font-size: 50px;
      font-weight: bold;
      cursor: pointer;
      z-index: 10001;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.3s ease;
    `;
    
    // Download button
    const downloadButton = document.createElement('a');
    downloadButton.href = fullUrl;
    downloadButton.download = `evidence-${Date.now()}.jpg`;
    downloadButton.innerHTML = '<i class="fas fa-download"></i>';
    downloadButton.style.cssText = `
      position: absolute;
      bottom: 30px;
      right: 30px;
      color: white;
      font-size: 20px;
      cursor: pointer;
      z-index: 10001;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: rgba(255, 107, 53, 0.8);
      transition: all 0.3s ease;
      text-decoration: none;
    `;
    
    // Info panel
    const infoPanel = document.createElement('div');
    infoPanel.style.cssText = `
      position: absolute;
      bottom: 30px;
      left: 30px;
      color: white;
      background-color: rgba(0, 0, 0, 0.7);
      padding: 15px 20px;
      border-radius: 8px;
      font-size: 14px;
      max-width: 300px;
    `;
    infoPanel.innerHTML = `
      <div><strong>Bằng chứng ghi hình</strong></div>
      <div style="margin-top: 5px; opacity: 0.8;">Click ảnh để zoom, ESC để đóng</div>
    `;
    
    // Zoom functionality
    let isZoomed = false;
    
    // Image load events
    img.onload = () => {
      loadingSpinner.style.display = 'none';
      img.style.opacity = '1';
    };
    
    img.onerror = () => {
      loadingSpinner.innerHTML = `
        <div style="
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #ff6b6b;
          font-size: 18px;
        ">
          <i class="fas fa-exclamation-triangle" style="font-size: 2em; margin-bottom: 10px;"></i>
          <span>Không thể tải ảnh</span>
        </div>
      `;
    };
    
    img.src = fullUrl;
    
    // Zoom functionality
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!isZoomed) {
        img.style.transform = 'scale(1.5)';
        img.style.cursor = 'zoom-out';
        isZoomed = true;
      } else {
        img.style.transform = 'scale(1)';
        img.style.cursor = 'zoom-in';
        isZoomed = false;
      }
    });
    
    // Button hover effects
    closeButton.addEventListener('mouseenter', () => {
      closeButton.style.backgroundColor = 'rgba(255, 107, 53, 0.8)';
      closeButton.style.transform = 'scale(1.1)';
    });
    
    closeButton.addEventListener('mouseleave', () => {
      closeButton.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      closeButton.style.transform = 'scale(1)';
    });
    
    downloadButton.addEventListener('mouseenter', () => {
      downloadButton.style.backgroundColor = 'rgba(255, 107, 53, 1)';
      downloadButton.style.transform = 'scale(1.1)';
    });
    
    downloadButton.addEventListener('mouseleave', () => {
      downloadButton.style.backgroundColor = 'rgba(255, 107, 53, 0.8)';
      downloadButton.style.transform = 'scale(1)';
    });
    
    // Assemble modal
    imageContainer.appendChild(img);
    modal.appendChild(imageContainer);
    modal.appendChild(closeButton);
    modal.appendChild(downloadButton);
    modal.appendChild(infoPanel);
    document.body.appendChild(modal);
    
    // Close modal function
    const closeModal = () => {
      modal.style.opacity = '0';
      setTimeout(() => {
        if (document.body.contains(modal)) {
          document.body.removeChild(modal);
          document.removeEventListener('keydown', handleEscape);
        }
      }, 300);
    };
    
    // ESC key handler
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    
    // Event listeners
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
    
    closeButton.addEventListener('click', (e) => {
      e.stopPropagation();
      closeModal();
    });
    
    document.addEventListener('keydown', handleEscape);
    
    // Show modal with animation
    setTimeout(() => {
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

  // Method lấy danh sách ảnh được hiển thị (tối đa 4 ảnh)
  getDisplayedImages(): string[] {
    const allImages = this.getEvidenceImages();
    if (this.showAllImagesFlag || allImages.length <= this.maxDisplayImages) {
      return allImages;
    }
    return allImages.slice(0, this.maxDisplayImages);
  }

  // Method lấy số ảnh còn lại
  getRemainingImagesCount(): number {
    const allImages = this.getEvidenceImages();
    if (this.showAllImagesFlag || allImages.length <= this.maxDisplayImages) {
      return 0;
    }
    return allImages.length - this.maxDisplayImages;
  }

  // Method hiển thị tất cả ảnh khi click vào "+X ảnh"
  showAllImages(): void {
    this.showAllImagesFlag = true;
  }
}
