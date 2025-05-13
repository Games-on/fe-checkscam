import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core'; // Import HostListener và OnInit
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // Thường cần cho standalone components

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

  isHeaderHidden = false;
  private lastScrollTop = 0;

  constructor() { }

  ngOnInit(): void {
    // Có thể thêm logic khởi tạo nếu cần
  }

  @Output() aiTuVanClicked = new EventEmitter<void>();

  onAiTuVanClick() {
    this.aiTuVanClicked.emit();
  }

  // Lắng nghe sự kiện 'scroll' trên đối tượng 'window'
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Xác định hướng cuộn
    if (scrollTop > this.lastScrollTop && scrollTop > 50) { // Cuộn xuống và đã cuộn qua một đoạn nhất định (ví dụ: 50px)
      this.isHeaderHidden = true; // Ẩn header
    } else if (scrollTop < this.lastScrollTop || scrollTop < 50) { // Cuộn lên hoặc cuộn về đầu trang
      this.isHeaderHidden = false; // Hiện header
    }

    this.lastScrollTop = scrollTop; // Cập nhật vị trí cuộn cuối cùng
  }
}