import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-edituser-form',
  templateUrl: './edituser-form.component.html',
  styleUrls: ['./edituser-form.component.css']
})
export class EdituserFormComponent implements OnInit, OnChanges {

  users!: User[];
  // selectedUser!: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log('ON INIT EDITUSER');
    
    this.userService.retrieveAllUsers().subscribe(data => {
      this.users = data;
    })
  }

  ngOnChanges(): void {
    console.log('ON CHANGES EDITUSER');
    
  }

  public selectUser(selected: User): void {

  }

}
