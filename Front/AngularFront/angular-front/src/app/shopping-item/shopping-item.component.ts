import { Component, OnInit } from '@angular/core';
import { Position } from '../Position';
// import { positions } from '../list-positions'

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {

  // positions: Position[];

  constructor() {
    // this.positions = positions;
  }

  getPosition(): void {

  }

  ngOnInit(): void {
  }

}
