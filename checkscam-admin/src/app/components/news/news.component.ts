import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

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

  constructor() { }

  ngOnInit() {

  }

  deleteNews(arg0: any) {
    throw new Error('Method not implemented.');
  }


}
