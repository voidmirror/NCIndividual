import { Component, OnInit } from '@angular/core';
import { CurrentUser } from '../current-user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // currentUser: CurrentUser;

  constructor(public currentUser: CurrentUser) {
    // this.currentUser = currentUserNow.getInstance();
  }

  ngOnInit(): void {
  }

}
