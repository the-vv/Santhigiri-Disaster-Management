import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export class NEWS{
  timestamp: number;
  articleCount: number;
  articles: Array<any>;
}

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  NewsURL = 'https://gnews.io/api/v3/search?q=kerala&image=required&token=8e25fde6bd1f0a7206c273e51befbd81';

  constructor(
    private http: HttpClient) { }

    getNews(): Observable<NEWS>{
      return this.http.get<NEWS>(this.NewsURL)
    }
}
