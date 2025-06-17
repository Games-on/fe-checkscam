// src/app/components/header/header.component.ts
import { Component, EventEmitter, HostListener, OnInit, Output, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // Thường cần cho standalone components
import { NavigationEnd, Router } from '@angular/router'; // Import Router và NavigationEnd

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  // isHeaderHidden là một @Input để nhận giá trị từ component cha (AppComponent)
  @Input() isHeaderHidden: boolean = false;

  // Biến để quản lý trạng thái mở/đóng của menu mobile (hamburger)
  isMenuOpen: boolean = false; // Đã khởi tạo giá trị ban đầu là false

  @Output() aiTuVanClicked = new EventEmitter<void>();

  constructor(private router: Router) { // Inject Router
    // Lắng nghe sự kiện chuyển hướng để đóng menu mobile tự động
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isMenuOpen = false; // Đóng menu khi chuyển trang
        document.body.classList.remove('no-scroll'); // Bỏ chặn cuộn
      }
    });
  }

  ngOnInit(): void {
    // Không cần logic cuộn ở đây
  }

  // Phương thức để mở/đóng menu mobile
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  // Phương thức khi click vào 'AI Tư vấn'
  onAiTuVanClick() {
    this.isMenuOpen = false; // Đóng menu khi click vào mục
    document.body.classList.remove('no-scroll'); // Bỏ chặn cuộn
    this.aiTuVanClicked.emit(); 
  }

  // Các phương thức khác cho các routerLink nếu bạn muốn đóng menu sau khi click
  // Ví dụ:
  onNavLinkClick() {
    this.isMenuOpen = false; // Đóng menu
    document.body.classList.remove('no-scroll'); // Bỏ chặn cuộn
    // RouterLink tự xử lý navigate, không cần logic navigate ở đây
  }
}