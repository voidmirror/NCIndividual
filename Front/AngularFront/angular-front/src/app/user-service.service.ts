import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './User';
import { CurrentUser } from './current-user';
import { Router } from '@angular/router';
import { BasketService } from './basket.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;
  private usersLoginUrl: string;
  private userSaveUrl: string;

  constructor(private http: HttpClient,
    public currentUser: CurrentUser,
    private router: Router) {
    this.usersUrl = 'https://localhost:8443/rest/v1/users';
    this.usersLoginUrl = 'https://localhost:8443/login';
    this.userSaveUrl = 'https://localhost:8443/rest/v1/users/add';
  }

  public retrieveAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl + '/all');
  }

  public saveUser(user: User) {
    return this.http.post<User>(this.userSaveUrl, user);
  }

  public changeUserRole(changeRole: Object) {
    return this.http.put(this.usersUrl + '/add', changeRole);
  }

  // public loginUser(user: User) {
  // //old
  //   return this.http.post<User>(this.usersLoginUrl, user);
  // }

  public loginUser(user: User): Object {
  //   let body = {
  //     'username': user.username,
  //     'password': user.password
  //   }
  //   console.log(body)

    // let body = new URLSearchParams();
    // body.set('username', user.username);
    // body.set('password', user.password);

    let body = `username=${user.username}&password=${user.password}`;
    
    // let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    // let headers = new HttpHeaders({'Content-Type' : 'application/x-www-form-urlencoded',
    //                                 'Access-Control-Allow-Origin' : '*',
    //                                 'Access-Control-Allow-Methods' : 'POST',
    //                                 'Access-Control-Allow-Headers' : 'Content-Type, Authorization'
    //                               });

    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin':'*'
      })
    };

    // let requestOptions = {
    //   headers: new Headers(headers);
    // }

    let result: Object;
    result = new Object() as User;
    this.http.post(this.usersLoginUrl, body, /*{headers: headers}*/ httpOptions).subscribe((res) => {
        result = res;
        let resUser = res as CurrentUser;
        this.currentUser.name = resUser.name;
        this.currentUser.email = resUser.email;
        this.currentUser.phoneNumber = resUser.phoneNumber;
        this.currentUser.username = resUser.username;
        this.currentUser.roles = resUser.roles;

        console.log('Hello from LOGIN');
        console.log(result);
        console.log(this.currentUser.findPrivilege("EDIT_CATALOG"));
        
        console.log('HEYYY');
        console.log(this.currentUser.name);
        this.currentUser.saveInStorage();
        console.log('HEYYY');
        console.log(JSON.parse(localStorage.getItem('MySportStoreCurrentUser') as string) as CurrentUser);
        
        return res;
      });

    // console.log(result);
    console.log('HERE');
    return result;
  }


  public logoutUser(){
      this.http.get('https://localhost:8443/logout');
      this.currentUser.clearCurrentUser();
      this.router.navigate(['']);
      // await new Promise(resolve => setTimeout(resolve, 500));
      // location.reload();
  }

}
