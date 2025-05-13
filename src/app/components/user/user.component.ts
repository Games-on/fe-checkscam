import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserDTO } from '../../dtos/user.dto';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from './create-user/create-user.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  name = '';
  email = '';
  password = '';
  isPopupVisible: any;

  accounts: any[] = [];
  pagedAccounts: any[] = [];
  pageSize = 10; // Số lượng người dùng trên mỗi trang
  currentPage = 1;
  totalAccounts = 0;
  totalPages = 0;
  pages: number[] = [];
  startIndex = 0;
  endIndex = 0;

  constructor(
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loadListUsers();
  }

  loadListUsers() {
    this.userService.getListUsers().subscribe({
      next: (response) => {
        this.accounts = response;
        this.totalAccounts = this.accounts.length;
        this.calculateTotalPages();
        this.paginateAccounts();
      },
      error: (error) => {
        alert(error.error);
      }
    });
  }

  paginateAccounts(): void {
    this.startIndex = (this.currentPage - 1) * this.pageSize;
    this.endIndex = Math.min(this.startIndex + this.pageSize, this.totalAccounts);
    this.pagedAccounts = this.accounts.slice(this.startIndex, this.endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.paginateAccounts();
    }
  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.totalAccounts / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  deleteUser(id: number) {
    if (confirm("Bạn có chắc muốn xóa người dùng này?")) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          this.loadListUsers();
        },
        error: (error) => {
          alert(error.error);
        }
      });
    }
  }

  createUser() {
    const userDTO: UserDTO = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    this.userService.createUser(userDTO).subscribe({
      next: () => {
        this.router.navigate(['/users']);
      },
      error: (error) => {
        alert(error.error);
      }
    });
  }

  openDialog(): void {
    this.dialog.open(CreateUserComponent, {
      width: '400px',
    });
  }

  unlockAccount(arg0: any) {
    throw new Error('Method not implemented.');
  }
}