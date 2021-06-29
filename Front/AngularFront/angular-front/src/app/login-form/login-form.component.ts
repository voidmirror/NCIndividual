import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../User';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm = new FormGroup({
    login: new FormControl(),
    password: new FormControl()
  });

  constructor(private userService: UserService) { };

  ngOnInit(): void {
  };

  onSubmit(): void {
    console.log(this.loginForm.value);
    let user = new User(this.loginForm.value.login, this.loginForm.value.password);
    let logged = this.userService.loginUser(user);
    console.log(logged.subscribe(logged => {
      user = logged;
    }))
    console.log(logged);
    console.log(user);
  }

}
