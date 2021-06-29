import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../User';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-adduser-form',
  templateUrl: './adduser-form.component.html',
  styleUrls: ['./adduser-form.component.css']
})
export class AdduserFormComponent implements OnInit {

  adduserForm = new FormGroup({
    name: new FormControl(),
    login: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
    phoneNumber: new FormControl()
  });

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
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
