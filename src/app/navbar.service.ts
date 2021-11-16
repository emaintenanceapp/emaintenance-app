import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Navbar } from './template/navbar/navbar';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  constructor(private http: HttpClient) { }

  /*getAllSubreddits(): Observable<Array<Navbar>> {
    return this.http.get<Array<Navbar>>('http://localhost:8080/api/subreddit');
  }

  createSubreddit(navbar: Navbar): Observable<Navbar> {
    return this.http.post<Navbar>('http://localhost:8080/api/subreddit', navbar);
  }*/
}
