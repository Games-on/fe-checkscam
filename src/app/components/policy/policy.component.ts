// src/app/components/policy/policy.component.ts

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'; // Import Location để dùng goBack()
import { RouterModule } from '@angular/router'; // Import RouterModule nếu có các routerLink khác

@Component({
  selector: 'app-policy', // Selector cho component này
  standalone: true, // Đảm bảo component là standalone
  imports: [RouterModule], // Imports cần thiết, tương tự AboutUsComponent
  templateUrl: './policy.component.html', // Liên kết đến file HTML
  styleUrls: ['./policy.component.scss'] // Liên kết đến file SCSS
})
export class PolicyComponent implements OnInit {

  constructor(private location: Location) { } // Inject Location để quay lại trang trước

  ngOnInit(): void {
    // Logic khởi tạo dữ liệu cho trang Điều khoản sử dụng (nếu có)
    // Ví dụ: tải nội dung điều khoản từ một API
  }

  /**
   * Quay lại trang trước đó trong lịch sử duyệt web.
   */
  goBack(): void {
    this.location.back();
  }
}