import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckScamService } from '../../services/check-scam.service';

interface Message {
  text: string;
  isUser: boolean;
}

@Component({
  selector: 'app-chat-box',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.scss'
})
export class ChatBoxComponent {
  @Output() close = new EventEmitter<void>();
  messages: Message[] = [];
  messageText: string = '';

  constructor(private checkScamService: CheckScamService) {
  }

  sendMessage() {
    if (this.messageText.trim()) {
      const userMessageText = this.messageText;
      this.messages.push({
        text: userMessageText,
        isUser: true
      });
      this.messageText = '';

      this.checkScamService.chat(userMessageText).subscribe({
        next: (apiResponse) => {
          // debugger
          if (apiResponse && typeof apiResponse.response === 'string') {
            this.messages.push({
              text: apiResponse.response,
              isUser: false
            });
          } else {
            this.messages.push({
              text: 'Xin lỗi, tôi không thể xử lý yêu cầu của bạn lúc này. (Lỗi định dạng phản hồi API)',
              isUser: false
            });
            console.error('Unexpected API Response structure:', apiResponse);
          }
        },
        error: (error) => {
          // debugger
          this.messages.push({
            text: 'Đã xảy ra lỗi khi kết nối với server.',
            isUser: false
          });
          console.error('Chat API Error:', error);
        }
      });
    }
  }

  formatMessageContent(text: string): string {
    if (!text) return '';

    let formattedText = text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

    formattedText = formattedText.replace(/\\n/g, '<br>');

    formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    formattedText = formattedText.replace(/\*(.*?)\*/g, '<em>$1</em>');


    formattedText = formattedText.replace(/^##\s(.*?)$/gm, '<h2>$1</h2>');
    formattedText = formattedText.replace(/^#\s(.*?)$/gm, '<h1>$1</h1>');

    const lines = formattedText.split('<br>'); 
    let inList = false;
    let newLines = [];
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim(); 
        if (line.match(/^[\*-]\s/)) {
            const listItemText = line.replace(/^[\*-]\s/, '').trim();
            if (!inList) {
                newLines.push('<ul>');
                inList = true;
            }
            newLines.push(`<li>${listItemText}</li>`);
        } else {
            if (inList) {
                newLines.push('</ul>');
                inList = false;
            }
 
            if (line.length > 0 && !line.startsWith('<h') && !line.startsWith('<ul') && !line.startsWith('<li>') && !line.startsWith('</ul')) {
                 newLines.push(`<p>${line}</p>`);
            } else {
                 newLines.push(line);
            }
        }
    }
    if (inList) {
        newLines.push('</ul>'); 
    }
    formattedText = newLines.join('');

    return formattedText;
  }
}