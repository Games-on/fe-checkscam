import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-footer', 
  imports: [
    CommonModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss' 
})
export class FooterComponent {
getCurrentYear() {
throw new Error('Method not implemented.');
}
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}