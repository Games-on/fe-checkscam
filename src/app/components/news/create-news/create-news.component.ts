import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../../../services/news.service';
import { NewsDTO } from '../../../dtos/news.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-news',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './create-news.component.html',
  styleUrl: './create-news.component.scss'
})
export class CreateNewsComponent implements OnInit {
  selectedFiles: File[] = [];
  shortDescription: string = '';
  name: string = '';
  content: string = '';

  constructor(
    private newsService: NewsService,
    private router: Router,
  ) { }

  ngOnInit() { }

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFiles = Array.from(input.files);
    }
  }

  goBack() {
    this.router.navigate(['/news']);
  }

  createNews() { 
    const newsDTO: NewsDTO = {
      name: this.name,
      shortDescription: this.shortDescription,
      content: this.content
    };
    
    this.newsService.createNews(newsDTO).subscribe({
      next: (response) => {
        debugger
        this.router.navigate(['/news']);
      },
      error: (error) => {
        debugger
        alert(error?.error || 'Có lỗi xảy ra khi tạo tin tức');
      }
    });
  }
}