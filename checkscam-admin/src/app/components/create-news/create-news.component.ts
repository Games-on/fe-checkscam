import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  url: any;
  constructor() { }
  ngOnInit() { }
  createNews() { }
}
