import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Position } from './Position'
import { UserShort } from './UserShort';
   
@Injectable()
export class HttpService{
   
    constructor(private http: HttpClient){ }
 
    postAddPosition(position: Position){
        console.log(position);
        const body = {name: position.name, price: position.price, description: position.description};
        console.log("post function");
        return this.http.post('http://localhost:8080/rest/v1/positions', body); 
    }

    getPositions(){
        console.log("get function");
        return this.http.get('http://localhost:8080/rest/v1/positions'); 
    }

    // postLoginUser(user: UserShort){
          
    //     const body = {name: user.login, password: user.password};
    //     return this.http.post('http://localhost:8080/rest/v1/users/login', body); 
    // }
}