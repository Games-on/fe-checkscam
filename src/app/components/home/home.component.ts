// src/app/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckScamService } from '../../services/check-scam.service';
import { CheckScamRequestDTO } from '../../dtos/check-scam-request.dto';
import { Router, RouterModule } from '@angular/router'; // Đảm bảo Router đã import
import { HeaderComponent } from '../../components/header/header.component'; // Cập nhật đường dẫn theo cấu trúc file của bạn
import { FooterComponent } from '../../components/footer/footer.component'; // Cập nhật đường dẫn theo cấu trúc file của bạn
import { ChatBoxComponent } from '../../components/chat-box/chat-box.component'; // Cập nhật đường dẫn theo cấu trúc file của bạn

// CẬP NHẬT LẠI INTERFACE NÀY ĐỂ KHỚP CHÍNH XÁC VỚI JSON TỪ BACKEND CỦA BẠN (như ảnh network)
interface SearchApiResponse {
  info: string;
  type: number;
  description: string;
  reportDescription: string;
  moneyScam: string;
  dateReport: string | null;
  verifiedCount: number;
  lastReportAt: string;
  evidenceURLs: string[]; // <-- Chú ý chữ hoa 'URLs'
  analysis: string; // Đây là trường 'analysis' từ backend
  // Bỏ các trường `code`, `message`, `data` vì chúng không có ở cấp root của response API của bạn
  // code?: number;
  // message?: string;
  // data?: any;
}

interface Message {
  sender: 'user' | 'bot';
  text: string;
  isUser: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    ChatBoxComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  info: string = '';
  selectedType: number = 1;
  currentSearchIcon: string = 'fas fa-mobile-alt';
  
  // searchResult: SearchApiResponse | null = null; // Dòng này phải được comment hoặc xóa
  isLoading: boolean = false;
  errorMessage: string | null = null;

  messages: Message[] = [];
  showChatbox: boolean = false;

  // Dữ liệu mới cho bảng ranking
  phoneNumbers = [
    { phone: '0123456789', count: 15420, status: 'danger', description: 'Lừa đảo vay tiền online' },
    { phone: '0987654321', count: 9850, status: 'danger', description: 'Lừa đảo bán hàng online' },
    { phone: '0345678901', count: 7890, status: 'safe', description: 'Số điện thoại được xác minh' },
    { phone: '0456789012', count: 6200, status: 'warning', description: 'Spam quảng cáo' },
    { phone: '0567890123', count: 5100, status: 'warning', description: 'Cuộc gọi nghi vấn' },
    { phone: '0678901234', count: 4800, status: 'danger', description: 'Lừa đảo đầu tư chứng khoán' },
    { phone: '0789012345', count: 4200, status: 'warning', description: 'Quảng cáo làm thêm' },
    { phone: '0890123456', count: 3950, status: 'danger', description: 'Lừa đảo bảo hiểm' },
    { phone: '0901234567', count: 3600, status: 'safe', description: 'Hotline chính thức' },
    { phone: '0912345678', count: 3200, status: 'warning', description: 'Gọi rối không nói gì' }
  ];

  bankAccounts = [
    { account: '9876543210987', count: 11200, status: 'warning', description: 'Tài khoản có dấu hiệu bất thường' },
    { account: '1234567890123', count: 6950, status: 'danger', description: 'Tài khoản lừa đảo đầu tư' },
    { account: '5555666677778888', count: 5200, status: 'danger', description: 'Tài khoản lừa đảo TMDT' },
    { account: '1111222233334444', count: 4800, status: 'warning', description: 'Giao dịch bất thường' },
    { account: '9999888877776666', count: 4200, status: 'safe', description: 'Tài khoản được xác minh' },
    { account: '1357924680135', count: 3800, status: 'danger', description: 'Lừa đảo cho vay nặng lãi' },
    { account: '2468013579246', count: 3400, status: 'warning', description: 'Tài khoản mới tạo' },
    { account: '8642097531864', count: 3100, status: 'danger', description: 'Lừa đảo game' },
    { account: '7531908642753', count: 2850, status: 'safe', description: 'Tài khoản doanh nghiệp' },
    { account: '6420875319642', count: 2600, status: 'warning', description: 'Nhận chuyển khoản lạ' }
  ];

  websites = [
    { website: 'phishing-bank.vn', count: 12850, status: 'danger', description: 'Website giả mạo ngân hàng' },
    { website: 'fake-ecommerce.com', count: 8750, status: 'danger', description: 'Shop online lừa đảo' },
    { website: 'crypto-scam.net', count: 5800, status: 'danger', description: 'Lừa đảo tiền ảo' },
    { website: 'suspicious-loan.org', count: 4900, status: 'warning', description: 'Website vay tiền nghi vấn' },
    { website: 'verified-shop.vn', count: 3800, status: 'safe', description: 'Website được xác minh' },
    { website: 'fake-lottery.com', count: 3500, status: 'danger', description: 'Lừa đảo xổ số' },
    { website: 'scam-investment.biz', count: 3200, status: 'danger', description: 'Lừa đảo đầu tư forex' },
    { website: 'fake-news-portal.info', count: 2900, status: 'warning', description: 'Website tin giả' },
    { website: 'trusted-store.vn', count: 2600, status: 'safe', description: 'Cửa hàng uy tín' },
    { website: 'phishing-social.net', count: 2300, status: 'danger', description: 'Giả mạo mạng xã hội' }
  ];

  // Tab management
  activeTab: string = 'phone';

searchResult: any;

  constructor(
    private checkScamService: CheckScamService,
    private router: Router // <-- Đảm bảo Router được inject
  ) { }

  ngOnInit(): void {
    this.updateSearchIcon();
  }

  onTypeChange(): void {
    this.updateSearchIcon();
    this.info = '';
    // this.searchResult = null; // Không cần nữa
    this.errorMessage = null;
  }

  updateSearchIcon(): void {
    switch (this.selectedType) {
      case 1:
        this.currentSearchIcon = 'fas fa-mobile-alt';
        break;
      case 2:
        this.currentSearchIcon = 'fas fa-university';
        break;
      case 3:
        this.currentSearchIcon = 'fas fa-globe';
        break;
      default:
        this.currentSearchIcon = 'fas fa-question-circle';
    }
  }

  sendMessage(): void {
    const value = this.info.trim();
    if (!value) {
      this.errorMessage = 'Vui lòng nhập thông tin cần tra cứu.';
      return;
    }

    this.errorMessage = null;
    this.isLoading = true;

    // Các validate đầu vào (giữ nguyên)
    if (this.selectedType === 1 && !this.isPhoneNumber(value)) {
      this.errorMessage = 'Số điện thoại phải bắt đầu bằng 0 và gồm 10 chữ số.';
      this.isLoading = false;
      return;
    }
    if (this.selectedType === 2 && !this.isBankNumber(value)) {
      this.errorMessage = 'Số tài khoản chỉ được chứa ký tự số.';
      this.isLoading = false;
      return;
    }
    if (this.selectedType === 3 && !this.isUrl(value)) {
      this.errorMessage = 'URL không hợp lệ (ví dụ hợp lệ: https://example.com hoặc example.vn).';
      this.isLoading = false;
      return;
    }

    const requestBody: CheckScamRequestDTO = {
      info: value,
      type: this.selectedType
    };

    this.checkScamService.checkScam(requestBody).subscribe({
      next: (response) => {
        this.isLoading = false;
        console.log('API RESPONSE:', response);

        if (response && response.info) {
          console.log('API response successful. Navigating to /analyze.');
          this.router.navigate(['/analyze'], {
            state: {
              result: response,
              type: this.selectedType,
              info: value
            }
          });
        } else {
          this.errorMessage = 'Cấu trúc phản hồi từ máy chủ không hợp lệ.';
          console.error('Unexpected API response structure:', response);
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error?.error?.message || error?.message || 'Đã xảy ra lỗi khi tra cứu.';
        console.error('API call failed:', error);
      }
    });
    this.info = '';
  }

  // ... (giữ nguyên các hàm validate và robot interaction)
  private isPhoneNumber(value: string): boolean {
    return /^0\d{9}$/.test(value.trim());
  }

  private isBankNumber(value: string): boolean {
    return /^\d+$/.test(value.trim());
  }

  private isUrl(value: string): boolean {
    const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i;
    return urlRegex.test(value.trim());
  }

  onAiTuVanClicked() {
    this.showChatbox = true;
  }

  closeChatbox() {
    this.showChatbox = false;
  }

  onRobotClick(): void {
    const actions = [
      () => this.showRobotMessage('🤖 Xin chào! Tôi là Robot CheckScam! Chân tôi có nhanh không?'),
      () => this.showRobotMessage('🛡️ Đang tuần tra bảo vệ bạn khỏi lừa đảo nè!'),
      () => this.showRobotMessage('⚡ Tôi chạy quanh đây để kiểm tra thông tin cho bạn!'),
      () => this.showRobotMessage('🔍 Hãy nhập thông tin vào ô tìm kiếm để tôi giúp bạn!'),
      () => this.showRobotMessage('🏃‍♂️ Tôi có thể chạy nhanh hơn! Xem chân tôi đạp thế nào!'),
      () => this.showRobotMessage('🚀 Bạn muốn xem tôi chạy TURBO không?'),
      () => this.showRobotMessage('🤖 Chân robot của tôi hoạt động bằng AI tiên tiến!'),
      () => this.showRobotMessage('👁️ Tôi chớp mắt để giữ cho bạn thấy cute!'),
      () => this.speedUpRobot()
    ];
    
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    randomAction();
  }

  private showRobotMessage(message: string): void {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = message;
    messageElement.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(45deg, #FF6B35, #FF8A65);
      color: white;
      padding: 15px 20px;
      border-radius: 20px;
      font-weight: 600;
      box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
      z-index: 10000;
      animation: fadeInOut 3s ease-in-out;
      max-width: 300px;
      text-align: center;
    `;
    
    document.body.appendChild(messageElement);
    
    setTimeout(() => {
      if (messageElement.parentNode) {
        messageElement.parentNode.removeChild(messageElement);
      }
    }, 3000);
  }

  private speedUpRobot(): void {
    const robot = document.querySelector('.search-robot') as HTMLElement;
    if (robot) {
      robot.style.animationDuration = '3s';
      robot.classList.add('turbo');
      this.showRobotMessage('🚀 TURBO MODE ACTIVATED! Chân robot đang chạy siêu nhanh!');
      
      setTimeout(() => {
        robot.style.animationDuration = '10s';
        robot.classList.remove('turbo');
      }, 5000);
    }
  }

  // Helper methods for top searched table
  getTypeIcon(type: string): string {
    switch (type) {
      case 'phone': return 'fas fa-mobile-alt';
      case 'bank': return 'fas fa-university';
      case 'url': return 'fas fa-globe';
      default: return 'fas fa-question-circle';
    }
  }

  getTypeName(type: string): string {
    switch (type) {
      case 'phone': return 'Điện thoại';
      case 'bank': return 'Tài khoản';
      case 'url': return 'Website';
      default: return 'Khác';
    }
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'danger': return 'fas fa-exclamation-triangle';
      case 'warning': return 'fas fa-exclamation-circle';
      case 'safe': return 'fas fa-check-circle';
      default: return 'fas fa-question-circle';
    }
  }

  getStatusText(status: string): string {
    switch (status) {
      case 'danger': return 'Nguy hiểm';
      case 'warning': return 'Cảnh báo';
      case 'safe': return 'An toàn';
      default: return 'Chưa rõ';
    }
  }

  // Tab management methods
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  // Mới: Methods cho dữ liệu mới
  getPhoneNumbers(): any[] {
    return this.phoneNumbers;
  }

  getBankAccounts(): any[] {
    return this.bankAccounts;
  }

  getWebsites(): any[] {
    return this.websites;
  }
}