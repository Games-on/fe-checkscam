import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'; // Import HeaderComponent
import { FooterComponent } from './footer/footer.component'; // Import FooterComponent

@Component({
  selector: 'app-root',
  // Đảm bảo standalone: true nếu bạn tạo component này là standalone
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent, // Thêm HeaderComponent vào đây
    FooterComponent // Thêm FooterComponent vào đây
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'checkscam-admin';
}