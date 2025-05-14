import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NewsService } from '../../../services/news.service';
import { NewsDTO } from '../../../dtos/news.dto';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ChatBoxComponent } from "../../chat-box/chat-box.component"; // Import FormsModule

@Component({
  selector: 'app-view-news',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    ChatBoxComponent,
    FooterComponent
],
  templateUrl: './view-news.component.html',
  styleUrl: './view-news.component.scss'
})
export class ViewNewsComponent implements OnInit {
  post: any = {};
  showChatbox: boolean = false;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadNewsById(id);
  }

  loadNewsById(id: number) {
    this.newsService.getNewsById(id).subscribe({
      next: (response) => {
        debugger
        this.post = response;
      },
      error: (error) => {
        debugger
        alert(error.error);
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