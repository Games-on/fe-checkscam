import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Thường cần CommonModule cho các structural directives (*ngIf, *ngFor) nếu component không standalone
import { RouterLink } from '@angular/router'; // Nếu có link trong footer

@Component({
  selector: 'app-footer', // Tên selector để sử dụng component này trong HTML
  // Nếu component là standalone (Angular 14+), import các module cần thiết
  // Nếu không phải standalone, đảm bảo component được khai báo trong một NgModule
  standalone: true, // Ví dụ đây là standalone component
  imports: [
    CommonModule, // Cần thiết cho standalone components
    RouterLink // Nếu có RouterLink trong template
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss' // Hoặc styleUrls: ['./footer.component.scss'] nếu dùng mảng
})
export class FooterComponent {
  // Các thuộc tính hoặc phương thức xử lý logic (nếu có) sẽ ở đây
  // Ví dụ: phương thức xử lý khi click vào mũi tên lên
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}