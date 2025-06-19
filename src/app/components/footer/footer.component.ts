import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true, 
  imports: [
    CommonModule,
    RouterLink 
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss' 
})
export class FooterComponent implements OnInit {
  showScrollToTopButton: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 300) {
      this.showScrollToTopButton = true;
    } else {
      this.showScrollToTopButton = false;
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}