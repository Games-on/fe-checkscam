  import { CommonModule } from '@angular/common';
  import { Component, OnInit } from '@angular/core';
  import { Router, RouterModule } from '@angular/router';
  import { NewsService } from '../../services/news.service';
  import { NewsDTO } from '../../dtos/news.dto';
  import { FormsModule } from '@angular/forms';

  @Component({
    selector: 'app-news',
    imports: [
      CommonModule,
      RouterModule,
      FormsModule
    ],
    templateUrl: './news.component.html',
    styleUrl: './news.component.scss'
  })
  export class NewsComponent implements OnInit {
    posts: any[] = [];
    isPopupVisible: any;
    shortDescription: string = '';
    name: string = '';
    content: string = '';

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
          debugger
          this.posts = response;
        },
        error: (error) => {
          debugger
          alert(error.error);
        }
      })
    }

    deleteNews(id: number) {
      if (confirm("Bạn có chắc muốn xóa bài đăng này?")) {
        this.newsService.deleteNewsById(id).subscribe({
          next: () => {
            debugger
            this.loadAllNews();
          },
          error: (error) => {
            debugger
            alert(error.error);
          }
        });
      }
    }

    createNews() {
      const newsDTO: NewsDTO = {
        name: this.name,
        shortDescription: this.shortDescription,
        content: this.content
      };

      this.newsService.createNews(newsDTO).subscribe({
        next: () => {
          debugger
          // const token = response.accessToken;
          // this.tokenService.saveToken(token);
          this.togglePopup();
          this.loadAllNews();
        },
        error: (error) => {
          debugger
          alert(error?.error);
        }
      });
    }

    togglePopup() {
      this.isPopupVisible = !this.isPopupVisible;
      if (this.isPopupVisible) {
      }
    }

    openAssignPopup() {
      this.togglePopup();
    }

    closePopup(event: any) {
      if (event.target.classList.contains('popup-overlay')) {
        this.isPopupVisible = false;
      }
    }
  }
