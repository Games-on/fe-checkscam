import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckScamService } from '../../services/check-scam.service';
import { CheckScamRequestDTO } from '../../dtos/check-scam-request.dto';
import { RouterModule } from '@angular/router';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule,
    RouterModule
  ],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent {
  messages: Message[] = [];
  info: string = '';
  selectedType: number = 1;

  constructor(private checkScamService: CheckScamService) {}

  sendMessage() {
    if (this.info.trim() !== '') {
      this.checkScam(this.info, this.selectedType);
      this.messages.push({ sender: 'user', text: this.info });
      this.info = '';
    }
  }

  checkScam(query: string, type: number) {
    const requestBody: CheckScamRequestDTO = {
      info: query,
      type: type
    };

    this.checkScamService.checkScam(requestBody).subscribe({
      next: (response) => {
        debugger
        if (response?.code === 200 && response?.data) {
          this.messages.push({ sender: 'bot', text: response.data });
        } else {
          this.messages.push({ 
            sender: 'bot', 
            text: (response?.message ? ' Chi tiết: ' + response.message : '') 
          });
        }
      },
      error: (error) => {
        debugger
        alert(error?.error);
      }
    });
  }
}