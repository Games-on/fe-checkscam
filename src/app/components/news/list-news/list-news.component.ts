import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { NewsService } from '../../../services/news.service';
import { ChatBoxComponent } from '../../chat-box/chat-box.component';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-list-news',
  imports: [
    CommonModule,
    RouterModule,
    FooterComponent,
    HeaderComponent,
    FormsModule // Thêm FormsModule vào imports
    ,
    ChatBoxComponent
  ],
  templateUrl: './list-news.component.html',
  styleUrl: './list-news.component.scss'
})
export class ListNewsComponent {
  posts: any[] = [];
  pagedPosts: any[] = [];
  pageSize = 6; // Số lượng tin tức trên mỗi trang
  currentPage = 1;
  searchTerm = '';
  totalPosts = 0;
  totalPages = 0;
  pages: number[] = [];
  startIndex = 0;
  endIndex = 0;
  showChatbox: boolean = false;

  constructor(
    private newsService: NewsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadAllNews();
  }

  loadAllNews() {
    this.newsService.getListNews().subscribe({
      next: (response) => {
        this.posts = response;
        this.totalPosts = this.posts.length;
        this.calculateTotalPages();
        this.paginatePosts();
      },
      error: (error) => {
        alert(error.error);
      }
    })
  }

  searchPosts(): void {
    this.currentPage = 1;
    this.paginatePosts();
  }

  paginatePosts(): void {
    const filteredPosts = this.searchTerm
      ? this.posts.filter(post =>
        post.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
      : this.posts;

    this.totalPosts = filteredPosts.length;
    this.calculateTotalPages();
    this.startIndex = (this.currentPage - 1) * this.pageSize;
    this.endIndex = Math.min(this.startIndex + this.pageSize - 1, this.totalPosts - 1);
    this.pagedPosts = filteredPosts.slice(this.startIndex, this.endIndex + 1);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.paginatePosts();
    }
  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.totalPosts / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  onAiTuVanClicked() {
    this.showChatbox = true;
  }

  closeChatbox() {
    this.showChatbox = false;
  }
}
