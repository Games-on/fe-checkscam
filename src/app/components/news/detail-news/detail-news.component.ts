import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../services/news.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-news',
  imports: [],
  templateUrl: './detail-news.component.html',
  styleUrl: './detail-news.component.scss'
})
export class DetailNewsComponent implements OnInit {
  post: any = {};

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadNewsById(id);
  }

  loadNewsById(id: number){
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
}
