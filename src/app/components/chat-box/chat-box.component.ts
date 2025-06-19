import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckScamService } from '../../services/check-scam.service';

interface Message {
  text: string;
  isUser: boolean;
}

const CHAT_MESSAGES_KEY = 'chat_messages_history';

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
export class ChatBoxComponent implements AfterViewInit {
  @Output() close = new EventEmitter<void>();
  @ViewChild('chatBody') private chatBodyElement!: ElementRef;

  messages: Message[] = [];
  messageText: string = '';
  isLoading: boolean = false;

  constructor(private checkScamService: CheckScamService) {
    this.loadMessages();
  }

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  private saveMessages() {
    try {
      localStorage.setItem(CHAT_MESSAGES_KEY, JSON.stringify(this.messages));
    } catch (e) {
      console.error('Error saving messages to localStorage', e);
    }
  }

  private loadMessages() {
    try {
      const storedMessages = localStorage.getItem(CHAT_MESSAGES_KEY);
      if (storedMessages) {
        this.messages = JSON.parse(storedMessages);
      } else {
        this.messages.push({
          text: "Chào bạn! Tôi là AI tư vấn của CheckScam. Tôi có thể giúp gì cho bạn?",
          isUser: false
        });
      }
    } catch (e) {
      console.error('Error loading messages from localStorage', e);
      this.messages = [{
        text: "Chào bạn! Tôi là AI tư vấn của CheckScam. Tôi có thể giúp gì cho bạn?",
        isUser: false
      }];
    }
  }

  scrollToBottom(): void {
    try {
      setTimeout(() => {
        if (this.chatBodyElement && this.chatBodyElement.nativeElement) {
          this.chatBodyElement.nativeElement.scrollTop = this.chatBodyElement.nativeElement.scrollHeight;
        }
      }, 0);
    } catch(err) {
      console.error("Scroll to bottom failed:", err);
    }
  }

  sendMessage() {
    if (this.messageText.trim() && !this.isLoading) {
      const userMessageText = this.messageText;
      this.messages.push({
        text: userMessageText,
        isUser: true
      });
      this.messageText = '';
      this.isLoading = true;
      this.saveMessages(); 
      this.scrollToBottom();

      this.checkScamService.chat(userMessageText).subscribe({
        next: (apiResponse) => {
          this.isLoading = false;
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
          this.saveMessages(); 
          this.scrollToBottom();
        },
        error: (error) => {
          this.isLoading = false;
          this.messages.push({
            text: 'Đã xảy ra lỗi khi kết nối với server. Vui lòng thử lại sau.',
            isUser: false
          });
          console.error('Chat API Error:', error);
          this.saveMessages();
          this.scrollToBottom();
        }
      });
    }
  }

  selectSuggestion(suggestion: string) {
    this.messageText = suggestion;
    this.sendMessage();
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

            if (line.length > 0 && !line.startsWith('<h') && !line.startsWith('<ul') && !line.startsWith('<li>') && !line.startsWith('</ul') && !line.startsWith('<p>')) {
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