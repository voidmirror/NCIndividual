import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasketPosition } from './BasketPosition';
import { Position } from './Position';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basket: BasketPosition[] = [];

  constructor(private http: HttpClient) { }

  public addPosition(position: Position) {
    let found = this.getPos(position.id);
    if (found == undefined) {
      this.basket.push(new BasketPosition(position, this.http));
    } else {
      found.increaseNum();
    }
  }

  private getPos(id: number): BasketPosition {

    let current: BasketPosition | undefined;
    current = undefined;

    for (let item of this.basket) {
      if (item.pos.id == id) {
        current = item;
      }
    }

    // return (elem) => {}

    // bad thing
    return current as BasketPosition;
  }



}
