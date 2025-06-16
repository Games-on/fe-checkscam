import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckScamService } from '../../services/check-scam.service';
import { CheckScamRequestDTO } from '../../dtos/check-scam-request.dto';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ChatBoxComponent } from '../chat-box/chat-box.component';

interface SearchApiResponse {
  info: string;
  type: number;
  description: string;
  reportDescription: string;
  moneyScam: string;
  dateReport: string | null;
  verifiedCount: number;
  lastReportAt: string;
  evidenceUrls: string[];
  analysis: string;
  code?: number;
  message?: string;
  data?: any;
}

interface Message {
  sender: 'user' | 'bot';
  text: string;
  isUser: boolean;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    ChatBoxComponent
  ],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent implements OnInit {

  info: string = '';
  selectedType: number = 1;
  currentSearchIcon: string = 'fas fa-mobile-alt';
  
  searchResult: SearchApiResponse | null = null;
  isLoading: boolean = false;
  errorMessage: string | null = null;

  messages: Message[] = [];
  showChatbox: boolean = false;

  scamReports: number = 325;
  usersProtected: number = 1000;
  checkedItems: number = 875;
  accuracy: string = '98,4%';

  constructor(private checkScamService: CheckScamService) { }

  ngOnInit(): void {
    this.updateSearchIcon();
  }

  onTypeChange(): void {
    this.updateSearchIcon();
    this.info = '';
    this.searchResult = null;
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
      this.searchResult = null;
      return;
    }

    this.searchResult = null;
    this.errorMessage = null;
    this.isLoading = true;

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
        if (response?.code === 200 && response?.data) {
          this.searchResult = response.data;
        } else {
          this.searchResult = null;
          this.errorMessage = response?.message || 'Không nhận được phản hồi hợp lệ từ bot.';
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.searchResult = null;
        this.errorMessage = error?.error?.message || error?.message || 'Đã xảy ra lỗi khi tra cứu.';
      }
    });
    this.info = '';
  }

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

  // Robot interaction
  onRobotClick(): void {
    // Random robot actions with more variety
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
    // Tạo temporary message bubble
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
    
    // Remove after 3 seconds
    setTimeout(() => {
      if (messageElement.parentNode) {
        messageElement.parentNode.removeChild(messageElement);
      }
    }, 3000);
  }

  private speedUpRobot(): void {
    const robot = document.querySelector('.search-robot') as HTMLElement;
    if (robot) {
      robot.style.animationDuration = '3s'; // Tăng tốc
      robot.classList.add('turbo'); // Thêm turbo class cho chân
      this.showRobotMessage('🚀 TURBO MODE ACTIVATED! Chân robot đang chạy siêu nhanh!');
      
      // Reset sau 5 giây
      setTimeout(() => {
        robot.style.animationDuration = '10s';
        robot.classList.remove('turbo');
      }, 5000);
    }
  }
}