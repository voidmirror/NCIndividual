import { Component, OnInit } from '@angular/core';
import {MENUITEMS, CATEGORIES} from '../list-menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topboard',
  templateUrl: './topboard.component.html',
  styleUrls: ['./topboard.component.css']
})
export class TopboardComponent implements OnInit {

  menuitems = MENUITEMS;
  categories = CATEGORIES;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToMain(): void {
    console.log('navigating');
    this.router.navigate(['']);
  }

  redirectToContacts(): void {
    this.router.navigate(['contacts']);
  }

}
