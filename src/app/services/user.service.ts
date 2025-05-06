import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpUtilService } from './http.util.service';
import { Observable } from 'rxjs';
import { LoginDTO } from '../dtos/login.dto';
import { environment } from '../environments/environment';
import { UserDTO } from '../dtos/user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiLogin = `${environment.apiBaseUrl}/auth/login`;
  private apiCreateUser = `${environment.apiBaseUrl}/users`
  constructor(
    private http: HttpClient,
    private httpUtilService: HttpUtilService
  ) { }

  private getApiConfig() {
    return {
      headers: this.httpUtilService.createHeaders(),
    };
  }

  login(loginDTO: LoginDTO): Observable<any> {    
    return this.http.post(this.apiLogin, loginDTO, this.getApiConfig());
  }  

  getListUsers(): Observable<any> {
    return this.http.get(`${environment.apiBaseUrl}/users`);
  }

  createUser(userDTO: UserDTO): Observable<any> {
    return this.http.post(this.apiCreateUser, userDTO, this.getApiConfig());
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${environment.apiBaseUrl}/users/${id}`);
  }
}
