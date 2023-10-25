import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Article, NewsResponse } from '../interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNewsHeadLines(): Observable<Article[]> {

    return this.http.get<NewsResponse>(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`).
      pipe(
        map(resp => resp.articles)
      );

  }


  getToHeadLinesByCategory(categoria: string): Observable<Article[]>{
     
    return this.http.get<NewsResponse>(`https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=us`).
    pipe(
      map(resp => resp.articles)
    );
  }






}
