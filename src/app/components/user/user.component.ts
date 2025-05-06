import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  accounts: any[] =[];
  constructor(
    private userService: UserService){
  
  }
  
  ngOnInit() {
    this.loadListUsers();
  }
  
  loadListUsers() {
    this.userService.getListUsers().subscribe({
      next: (response) => {
        debugger
        this.accounts = response;
      },
      error: (error) => {
        debugger
        alert(error.error);
      }
    })
  }
  
  deleteUser(id: number) {
    if (confirm("Bạn có chắc muốn người dùng thi này?")) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          debugger
          this.loadListUsers();
        },
        error: (error) => {
          debugger
          alert(error.error);
        }
      });
    }
  }
    unlockAccount(arg0: any) {
    throw new Error('Method not implemented.');
    }
}
