import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { LoginDTO } from '../../dtos/login.dto';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  @ViewChild('loginForm') loginForm!: NgForm;
  username: string = 'admin@gmail.com';
  password: string = '123456';

  constructor(
    private router: Router,
    private userService: UserService,
    // private tokenService: TokenService,
  ) { }

  login(){
    // this.tokenService.clearToken();
    const loginDTO: LoginDTO = {
      username: this.username,
      password: this.password
    };

    this.userService.login(loginDTO).subscribe({
      next: (response) => {
        debugger
        // const token = response.accessToken;
        // this.tokenService.saveToken(token);
        this.router.navigate(['/users']);
      },
      error: (error) => {
        debugger
        alert(error?.error);
      }
    });
  }
}
