import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsService } from '../../../services/news.service';

@Component({
  selector: 'app-view-news',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './view-news.component.html',
  styleUrl: './view-news.component.scss'
})
export class ViewNewsComponent {
  posts: any[] = [];

  constructor(
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.loadAllNews();
  }

  loadAllNews(){
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
}
