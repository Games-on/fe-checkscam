import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit {
  posts: any[]=[];

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

  deleteNews(arg0: any) {
    throw new Error('Method not implemented.');
  }


}
