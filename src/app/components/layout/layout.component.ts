import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-layout',
  imports: [RouterModule,
    RouterModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  constructor(
    private userService: UserService,
    private router: Router
  ){}
  logout() {
    this.userService.logout().subscribe({
      next: () => {
        debugger
        localStorage.removeItem('accessToken');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        debugger
        alert(error?.error);
      }
    });
  }
}
