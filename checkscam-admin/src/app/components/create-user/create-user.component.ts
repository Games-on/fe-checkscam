import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDTO } from '../../dtos/user.dto';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-user',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  name = '';
  email = '';
  password = '';
  
  constructor(
    private userService: UserService,
    private router: Router,
  ){}
  
  ngOnInit() {
  
  }
  
  createUser(){
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
}
