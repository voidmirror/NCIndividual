import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { BasketPosition } from '../BasketPosition';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  

  constructor(public basketService: BasketService) { }

  ngOnInit(): void {
  }

  

}
