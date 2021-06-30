import { Component, OnInit } from '@angular/core';
import { TOPPANEL_ANON } from '../list-menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toppanel-anon',
  templateUrl: './toppanel-anon.component.html',
  styleUrls: ['./toppanel-anon.component.css']
})
export class ToppanelAnonComponent implements OnInit {

  toppanelAnon = TOPPANEL_ANON;
  num = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToProfile(): void {
    this.router.navigate(['profile']);
  }

}
