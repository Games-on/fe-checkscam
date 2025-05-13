
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
    shortDescription: string = '';
    name: string = '';
    content: string = '';

    constructor(
      private newsService: NewsService,
      private router: Router,
    ) { }

    ngOnInit() { }

    createNews() { 
      const newsDTO: NewsDTO = {
            name: this.name,
            shortDescription: this.shortDescription,
            content: this.content
          };
      
          this.newsService.createNews(newsDTO).subscribe({
            next: (response) => {
              debugger
              // const token = response.accessToken;
              // this.tokenService.saveToken(token);
              this.router.navigate(['/news']);
            },
            error: (error) => {
              debugger
              alert(error?.error);
            }
          });
    }
  }