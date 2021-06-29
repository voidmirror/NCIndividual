import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;
  private usersLoginUrl: string;
  private userSaveUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/rest/v1/users';
    this.usersLoginUrl = 'http://localhost:8080/rest/v1/users/login';
    this.userSaveUrl = 'http://localhost:8080/rest/v1/users/add';
  }

  public retrieveAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public saveUser(user: User) {
    return this.http.post<User>(this.userSaveUrl, user);
  }

  public loginUser(user: User) {
    return this.http.post<User>(this.usersLoginUrl, user);
  }


}
