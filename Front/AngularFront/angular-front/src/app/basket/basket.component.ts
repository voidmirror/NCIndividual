import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from '../basket.service';
import { BasketPosition } from '../BasketPosition';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit, OnDestroy, OnChanges {

  sum: number = 0;

  constructor(public basketService: BasketService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.sum = this.countSum();
  }

  ngOnInit(): void {
    this.sum = this.countSum();
  }

  ngOnDestroy(): void {
    localStorage.setItem('MySportStoreBasket', JSON.stringify(this.basketService.basket));
  }

  public isLogged(): boolean {
    // console.log(this.basketService.userService.currentUser.username == undefined);
    return this.basketService.userService.currentUser.username != undefined;
  }

  // public countSum(): number {
  //   let sum = 0;
  //   for (let item of this.basketService.basket) {
  //     sum += item.price;
  //   }
    
  //   console.log('sum log ' + sum);
    
  //   return sum;
  // }

  public countSum(): number {
    this.basketService.calculateAllPrice();
    return 100;
    
    // return this.basketService.calculateAllPrice();
  }

}
