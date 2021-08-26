import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { CurrentUser } from '../current-user';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // currentUser: CurrentUser;

  constructor(public userService: UserService,
    public basketService: BasketService) {
    // this.currentUser = currentUserNow.getInstance();
    
  }

  ngOnInit(): void {
  }

}
