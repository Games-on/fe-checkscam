import { Component, ViewChild, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { LoginDTO } from '../../dtos/login.dto';
import { TokenService } from '../../services/token.service';
import { MatDialog } from '@angular/material/dialog';  // Import MatDialog
import { AdminContactModalComponent } from './admin-contact-modal.component'; // Import component modal

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm!: NgForm;
  username = 'admin@gmail.com';
  password = '123456';

  constructor(
    private router: Router,
    private userService: UserService,
    private tokenService: TokenService,
    public dialog: MatDialog // Inject MatDialog
  ) {}

  ngOnInit(): void {}

  login() {
    this.tokenService.clearToken();
    const loginDTO: LoginDTO = {
      username: this.username,
      password: this.password,
    };

    this.userService.login(loginDTO).subscribe({
      next: (response) => {
        const token = response.access_token;
        this.tokenService.saveToken(token);
        this.router.navigate(['/users']);
      },
      error: (error) => {
        alert(error?.error);
      },
    });
  }

  // Hàm hiển thị modal liên hệ admin
  showAdminContact() {
    this.dialog.open(AdminContactModalComponent, {
      width: '400px',
    });
  }
}

@Component({
  selector: 'app-admin-contact-modal',
  template: `
    <h2 mat-dialog-title>Liên hệ quản trị viên</h2>
    <div mat-dialog-content>
      <p>
        Vui lòng liên hệ với quản trị viên hệ thống để được hỗ trợ đặt lại mật khẩu.
      </p>
      <p>
        <strong>Thông tin liên hệ:</strong><br />
        Email: admin@example.com<br />
        Điện thoại: +84 123 456 789<br />
        Giờ làm việc: 8:00 - 17:00, Thứ Hai - Thứ Sáu
      </p>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Đóng</button>
    </div>
  `,
})
export class AdminContactModalComponent {}
