import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasketPosition } from './BasketPosition';
import { Position } from './Position';
// import { OnInit, OnChanges } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basket: BasketPosition[] = [];

  constructor(private http: HttpClient) {
    console.log('BASKETSERVICE INITIATING');
    
    if (localStorage.getItem('MySportStoreBasket') != null) {
      let copy: BasketPosition[] = JSON.parse(localStorage.getItem('MySportStoreBasket') as string);
      for (let item of copy) {
        this.addPosition(item.pos)
        this.getPos(item.pos.id).setNum(item.num);
        
        // item.calculatePrice();
      }
    }
   }

  // ngOnInit(): void {
  //   console.log('BASKETSERVICE INITIATING');
    
  //   if (localStorage.getItem('MySportStoreBasket') != null) {
  //     this.basket = JSON.parse(localStorage.getItem('MySportStoreBasket') as string);
  //   }
  // }

  public addPosition(position: Position) {
    console.log('INSIDE ADD POSITION TO BUSKET');
    
    let found = this.getPos(position.id);
    // console.log(found);
    
    if (found == undefined) {
      console.log(this.basket.push(new BasketPosition(position, this.http)));
    } else {
      found.increaseNum();
    }
    localStorage.setItem('MySportStoreBasket', JSON.stringify(this.basket));
    // this.backupBasket();
    // console.log(this.basket);
    
  }

  backupBasket(): void {
    localStorage.setItem('MySportStoreBasket', JSON.stringify(this.basket));
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
        localStorage.setItem('MySportStoreBasket', JSON.stringify(this.basket));
        // this.backupBasket();
        break;
      }
    }
  }

}
