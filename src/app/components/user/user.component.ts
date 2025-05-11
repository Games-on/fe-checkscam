import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserDTO } from '../../dtos/user.dto';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from './create-user/create-user.component';

@Component({
  selector: 'app-user',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  name = '';
  email = '';
  password = '';
  isPopupVisible: any;


  accounts: any[] = [];
  constructor(
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog
  ) {

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

  createUser() {
    const userDTO: UserDTO = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    this.userService.createUser(userDTO).subscribe({
      next: () => {
        debugger
        this.router.navigate(['/users']);
      },
      error: (error) => {
        debugger
        alert(error.error);
      }
    })
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
