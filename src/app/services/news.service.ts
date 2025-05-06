import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpUtilService } from './http.util.service';
import { Observable } from 'rxjs';
import { NewsDTO } from '../dtos/news.dto';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiNews = `${environment.apiBaseUrl}/news`;
  constructor(
    private http: HttpClient,
    private httpUtilService: HttpUtilService
  ) { }

  private getApiConfig() {
    return {
      headers: this.httpUtilService.createHeaders(),
    };
  }

  getListNews(): Observable<any> {
      return this.http.get(`${environment.apiBaseUrl}/news`);
  }

  createNews(newsDTO: NewsDTO): Observable<any> {
      return this.http.post(this.apiNews, newsDTO, this.getApiConfig());
    }
}
