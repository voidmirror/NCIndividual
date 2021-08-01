import { Component, OnInit } from '@angular/core';
import { TOPPANEL_ANON } from '../list-menu';
import { Router } from '@angular/router';
import { CurrentUser } from '../current-user';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-toppanel-anon',
  templateUrl: './toppanel-anon.component.html',
  styleUrls: ['./toppanel-anon.component.css']
})

export class ToppanelAnonComponent implements OnInit {

  toppanelAnon = TOPPANEL_ANON;
  num = 0;
  btnProfileValue = '';

  constructor(private router: Router, public currentUser: CurrentUser, public basketService: BasketService) { }

  ngOnInit(): void {
    

    // if (this.currentUser.getName() == undefined) {
    //   this.btnProfileValue = 'Sign In/Up';
    // } else {
    //   this.btnProfileValue = this.currentUser.getName();
    // }
    
    this.checkProfileButtonValue();
  }

  checkProfileButtonValue(): void {
    if (CurrentUser.uname == undefined) {
      this.btnProfileValue = 'Sign In/Up';
    } else {
      this.btnProfileValue = CurrentUser.uname;
    }
  }

  redirectToSignOrProfile(): void {
    if (this.btnProfileValue == 'Sign In/Up') {
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['profile']);
    }
  }

  redirectToProfile(): void {
    console.log('navigating');
    this.router.navigate(['profile']);
  }

  redirectToFeedback(): void {
    this.router.navigate(['feedback']);
  }

  redirectToBasket(): void {
    this.router.navigate(['basket']);
  }

}
