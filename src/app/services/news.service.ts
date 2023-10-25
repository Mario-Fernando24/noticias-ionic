import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Article, NewsResponse } from '../interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  // centralizar generico T K
  private executeQuery<T>(endpoint: string){
      return this.http.get<any>(`${apiUrl}${endpoint} `,{
        params: {apiKey}
      })
  }

  getNewsHeadLines(): Observable<Article[]> {

    return this.executeQuery(`/top-headlines?country=us&category=business`).
      pipe(
        map(({resp}) => resp));
  }


  getToHeadLinesByCategory(categoria: string): Observable<Article[]> {

    return this.http.get<NewsResponse>(`https://newsapi.org/v2/top-headlines?country=us&category=${categoria}`,{
      params: {apiKey}
    }).
      pipe(
        map(resp => resp.articles)
      );
  }






}
