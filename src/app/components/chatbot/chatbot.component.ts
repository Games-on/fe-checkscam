import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckScamService } from '../../services/check-scam.service';
import { CheckScamRequestDTO } from '../../dtos/check-scam-request.dto';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component'; 
import { FooterComponent } from '../footer/footer.component'; 
import { ChatBoxComponent } from '../chat-box/chat-box.component';

// Cập nhật interface Message để có thuộc tính isUser
interface Message {
  sender: 'user' | 'bot'; // Có thể giữ lại sender nếu cần, nhưng isUser là đủ cho căn chỉnh
  text: string;
  isUser: boolean; // Thêm thuộc tính này
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
export class ChatbotComponent {
  messages: Message[] = [];
  info: string = '';
  selectedType: number = 1;
  showChatbox: boolean = false;

  constructor(private checkScamService: CheckScamService) { }

  sendMessage() {
    if (this.info.trim() !== '') {
      // Thêm tin nhắn người dùng vào mảng với isUser = true
      this.messages.push({ sender: 'user', text: this.info, isUser: true });
      this.checkScam(this.info, this.selectedType);
      this.info = ''; // Xóa nội dung input sau khi gửi
    }
  }

  checkScam(query: string, type: number) {
    const requestBody: CheckScamRequestDTO = {
      info: query,
      type: type
    };

    this.checkScamService.checkScam(requestBody).subscribe({
      next: (response) => {
        // debugger // Có thể bỏ debugger khi code chạy ổn định
        let botResponseText = '';
        if (response?.code === 200 && response?.data) {
           botResponseText = response.data;
        } else {
           botResponseText = (response?.message ? ' Chi tiết: ' + response.message : 'Không nhận được phản hồi từ bot.');
        }
         // Thêm tin nhắn bot vào mảng với isUser = false
        this.messages.push({ sender: 'bot', text: botResponseText, isUser: false });
      },
      error: (error) => {
        // debugger // Có thể bỏ debugger
        const errorMessage = error?.error || 'Đã xảy ra lỗi khi tra cứu.';
        alert(errorMessage);
         // Thêm tin nhắn lỗi như tin nhắn bot
        this.messages.push({ sender: 'bot', text: 'Lỗi: ' + errorMessage, isUser: false });
      }
    });
  }

  onAiTuVanClicked() {
    this.showChatbox = true;
  }

  closeChatbox() {
    this.showChatbox = false;
  }
}