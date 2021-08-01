import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { BasketService } from '../basket.service';
import { BasketPosition } from '../BasketPosition';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit, OnDestroy {

  constructor(public basketService: BasketService) { }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    localStorage.setItem('MySportStoreBasket', JSON.stringify(this.basketService.basket));
  }

  public countSum(): number {
    let sum = 0;
    for (let item of this.basketService.basket) {
      sum += item.price;
    }
    
    console.log('sum log ' + sum);
    
    return sum;
  }

}
