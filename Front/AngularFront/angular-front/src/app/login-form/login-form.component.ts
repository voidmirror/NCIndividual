import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../User';
import { UserService } from '../user-service.service';
import { Router } from '@angular/router';
import { CurrentUser } from '../current-user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  adduserForm = new FormGroup({
    name: new FormControl(),
    login: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
    phoneNumber: new FormControl()
  });

  loginForm = new FormGroup({
    login: new FormControl(),
    password: new FormControl()
  });

  constructor(private userService: UserService, private router: Router, public currentUser: CurrentUser) { };

  ngOnInit(): void {
  };

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  onSubmitLogin(): void {
    console.log(this.loginForm.value);
    let user = new User(this.loginForm.value.login, this.loginForm.value.password);
    let logged = this.userService.loginUser(user) as User;
    let response;
    // console.log(logged.subscribe(logged => {
    //   response = logged;
    // }))
    
    // this.currentUser.setEmail(logged.email);
    // this.currentUser.setPhoneNumber(logged.phoneNumber);
    
    console.log('current user start');    
    console.log(this.userService.currentUser.email);
    console.log('current user stop');
    console.log(logged);
    console.log(response);
    this.router.navigate(['/']);
    // location.reload();
  }

  onSubmitAuthenticate(): void {
    console.log(this.adduserForm.value);
    let user = new User(this.adduserForm.value.login, this.adduserForm.value.password, this.adduserForm.value.name, this.adduserForm.value.email, this.adduserForm.value.phoneNumber);
    let added = this.userService.saveUser(user);
    console.log(added.subscribe(added => {
      user = added;
      
    }))
    
    console.log(added);
    console.log(user);
  }

}
