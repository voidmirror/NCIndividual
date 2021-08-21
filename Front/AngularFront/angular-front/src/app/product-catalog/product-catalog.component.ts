import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { ListPositions } from '../list-positions';
import { Position } from '../Position'
import { PositionListComponent } from '../position-list/position-list.component';
import { PositionService } from '../position-service.service';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {

  listPos: PositionListComponent;
  positions: Position[];
  isInCatalog: boolean = true;

  constructor(public positionService: PositionService, 
    private basketService: BasketService) {
    this.listPos = new PositionListComponent(positionService);
    this.positions = this.listPos.getPositions();
   }

  ngOnInit(): void {
    this.positionService.retrieveAllPositions().subscribe(data => {
      this.positions = data;
    });
    // console.log(this.positions);
    this.positions = this.listPos.getPositions();
    console.log('INIT PRODUCT CATALOG');
    
  }
  
  addToBasket(pos: Position): void {
    this.basketService.addPosition(pos);
  }
  

}
