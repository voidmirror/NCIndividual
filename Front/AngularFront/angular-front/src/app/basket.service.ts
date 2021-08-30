import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketPosition } from './BasketPosition';
import { BasketCalculator } from './CustomTypes';
import { Position } from './Position';
import { UserService } from './user-service.service';
// import { OnInit, OnChanges } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basketSum: number = 0;

  basket: BasketPosition[] = [];

  basketLink: string = 'https://localhost:8443/rest/v1/basket'

  constructor(private http: HttpClient,
    public userService: UserService) {
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

  public clearBasket(): void {
    for (let i = this.basket.length - 1; i >= 0; i--) {
      this.basket.pop();
  }
    localStorage.removeItem('MySportStoreBasket');
  }

  public pay() {
    
  }

  // public calculateAllPrice() {

  //   let sum: number = 0;

  //   let send = {
  //     'basketPositions' : this.basket,
  //     'username' : this.userService.currentUser.username
  //   }

  //   this.http.post(this.basketLink + '/calculate/all', send).subscribe(data => {
  //     this.basketSum = data as number;
  //     console.log('basketSum is ' + this.basketSum);
      
  //     console.log('sum is ' + sum);
  //   })

  //   console.log(this.basketSum);
    
  //   // await new Promise(resolve => setTimeout(resolve, 500));
  //   console.log('after post sum is ' + sum);
    

  //   return sum;
  // }


  public restoreBasket(basketCalculator: BasketCalculator): void {
    for (let some of basketCalculator.basketPositions) {
      for (let i = 0; i < some.num; i++) {
        this.addPosition(some.pos);
      }
    }
  }


  public calculateAllPrice() {

    let sum: number = 0;

    console.log('INIT CALCULATE ALL PRICE=======================================================================================');

    let send = {
      'basketPositions': this.basket,
      'username': this.userService.currentUser.username,
      'basketSum': this.basketSum
    }

    console.log(send);
    

    this.http.post(this.basketLink + '/calculate/all', send).subscribe(async data => {
      let basketReceive: BasketCalculator;
      basketReceive = data as BasketCalculator;
      // let some: BasketPosition[];
      // some = basketReceive.basketPositions as BasketPosition[];
      this.clearBasket();
      console.log(this.basket);
      this.restoreBasket(basketReceive);
      // console.log(this.basket);
      
      // for (let item of some) {
      //   this.addPosition(item.pos);
      // }

      // this.basket = basketReceive.basketPositions as BasketPosition[];
      // for (let item of basketReceive.basketPositions) {
        // console.log('item ' + item);
        // console.log('num ' + item.num);
        // console.log('pos ' + item.pos);
        
        // this.addPosition(item.pos);
        // for (let i = 0; i < item.num; i++) {
        //   this.addPosition(item.pos);
        //   console.log(item.pos);
          
        // }
        
      // }
      this.basketSum = basketReceive.basketSum;
      // console.log('basketReceive ');
      
      // console.log(basketReceive.basketPositions);
      // console.log(basketReceive.basketSum);
      // console.log(basketReceive.username);

      // console.log(this.basket);
      // console.log(this.basketSum);
      this.backupBasket();
      
      // console.log('basketSum is ' + this.basketSum);
      
      // console.log('sum is ' + sum);
    })

    // console.log('after basket post:' + this.basketSum);
    
    // await new Promise(resolve => setTimeout(resolve, 500));
    // console.log('after post sum is ' + sum);
    

    return sum;
  }



  // public calculateAllPrice() {

  //   let sum: number = 0;

  //   console.log('INIT CALCULATE ALL PRICE');

  //   let send = {
  //     'basketPositions': this.basket,
  //     'username': this.userService.currentUser.username,
  //     'basketSum': this.basketSum
  //   }

  //   console.log(send);
    

  //   this.http.post(this.basketLink + '/calculate/all', send).subscribe(data => {
  //     // let basketReceive: BasketCalculator;
  //     this.basket = data as BasketPosition[];
  //     // this.basket = basketReceive.basket
  //     // this.basketSum = basketReceive.basketSum;
  //     console.log('basketReceive ');
      
  //     // console.log(basketReceive.basket);
  //     // console.log(basketReceive.basketSum);
  //     // console.log(basketReceive.username);

      
  //     console.log(this.basket);
  //     // console.log(this.basketSum);
      
  //     // console.log('basketSum is ' + this.basketSum);
      
  //     // console.log('sum is ' + sum);
  //   })

  //   // console.log('after basket post:' + this.basketSum);
    
  //   // await new Promise(resolve => setTimeout(resolve, 500));
  //   // console.log('after post sum is ' + sum);
    

  //   return sum;
  // }

  public increaseNum(some: BasketPosition): void {
    console.log(some);
    
    some.increaseNum();
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
