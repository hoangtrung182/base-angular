import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_USER = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  login(user: User): Observable<User> {
    return this.http.post<User>(this.API_USER, user);
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.API_USER, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.API_USER);
  } 
}
