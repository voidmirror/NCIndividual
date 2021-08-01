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
    console.log('INSIDE ADD POSITION TO BUSKET');
    
    let found = this.getPos(position.id);
    // console.log(found);
    
    if (found == undefined) {
      console.log(this.basket.push(new BasketPosition(position, this.http)));
    } else {
      found.increaseNum();
    }
    // console.log(this.basket);
    
  }

  private getPos(id: number): BasketPosition {
    console.log('INSIDE GET');

    let current: BasketPosition | undefined;
    current = undefined;

    for (let item of this.basket) {
      console.log(item);
      
      if (item.pos.id == id) {
        current = item;
      }
    }

    // return (elem) => {}

    // bad thing
    return current as BasketPosition;
  }

  getPositionsNum(): number {
    let sum = 0;
    for (let item of this.basket) {
      sum += item.num;
    }

    return sum;
  }

  deleteItem(id: number) {
    for (let item of this.basket) {
      if (id === item.pos.id) {
        this.basket.splice(this.basket.indexOf(item), 1);
        console.log(this.basket);
        break;
      }
    }
  }

}
