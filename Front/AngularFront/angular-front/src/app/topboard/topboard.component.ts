import { Component, OnInit } from '@angular/core';
import {MENUITEMS, CATEGORIES} from '../list-menu'

@Component({
  selector: 'app-topboard',
  templateUrl: './topboard.component.html',
  styleUrls: ['./topboard.component.css']
})
export class TopboardComponent implements OnInit {

  menuitems = MENUITEMS;
  categories = CATEGORIES;

  constructor() { }

  ngOnInit(): void {
  }

}
