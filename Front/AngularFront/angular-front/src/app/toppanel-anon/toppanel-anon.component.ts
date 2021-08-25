import { Component, OnInit } from '@angular/core';
import { TOPPANEL_ANON } from '../list-menu';
import { Router } from '@angular/router';
import { CurrentUser } from '../current-user';
import { BasketService } from '../basket.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user-service.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-toppanel-anon',
  templateUrl: './toppanel-anon.component.html',
  styleUrls: ['./toppanel-anon.component.css']
})

export class ToppanelAnonComponent implements OnInit {

  toppanelAnon = TOPPANEL_ANON;
  num = 0;
  name: string = '';
  btnProfileValue = this.userService.currentUser.name == undefined ? 'Sign In/Up' : this.userService.currentUser.name;
  // private observeCurrentUser: Subject<string>;

  constructor(private router: Router, 
    public userService: UserService, 
    public basketService: BasketService,
    private modalService: NgbModal) {
      // this.observeCurrentUser = new BehaviorSubject<string>()
     }

  ngOnInit(): void {
    

    // if (this.currentUser.getName() == undefined) {
    //   this.btnProfileValue = 'Sign In/Up';
    // } else {
    //   this.btnProfileValue = this.currentUser.getName();
    // }
    console.log('ON INIT TOPPANEL');
    
    this.checkProfileButtonValue();
  }

  checkProfileButtonValue(): void {
    if (this.userService.currentUser.name == undefined) {
      console.log(this.userService.currentUser.name);
      
      this.btnProfileValue = 'Sign In/Up';
    } else {
      this.btnProfileValue = this.userService.currentUser.name;
    }
  }

  public openPopup(content: any) {
    const modalRef = this.modalService.open(content);
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

  redirectToEdituser(): void {
    this.router.navigate(['edituser']);
  }

  redirectToBasket(): void {
    this.router.navigate(['basket']);
  }

}
