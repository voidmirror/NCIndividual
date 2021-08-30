import { Component, OnInit } from '@angular/core';
import {MENUITEMS, CATEGORIES} from '../list-menu';
import { Router } from '@angular/router';
import { PositionService } from '../position-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-topboard',
  templateUrl: './topboard.component.html',
  styleUrls: ['./topboard.component.css']
})
export class TopboardComponent implements OnInit {

  // menuitems = MENUITEMS;
  // categories = CATEGORIES;

  constructor(private router: Router,
    public positionService: PositionService,
    private modalService: NgbModal,
    public userService: UserService) { }

  ngOnInit(): void {
  }

  redirectToMain(): void {
    console.log('navigating');
    this.router.navigate(['']);
  }

  redirectToContacts(): void {
    this.router.navigate(['contacts']);
  }

  filterCatalog(filter: string): void {
    this.positionService.setCurrentFilter(filter);
    this.redirectToMain();
  }

  public openPopup(content: any) {
    const modalRef = this.modalService.open(content);
  }

}
