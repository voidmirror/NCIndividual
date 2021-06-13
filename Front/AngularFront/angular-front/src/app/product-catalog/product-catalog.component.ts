import { Component, OnInit } from '@angular/core';
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

  listPos: ListPositions;
  positions: Position[];

  constructor(private positionService: PositionService) {
    this.listPos = new ListPositions();
    this.positions = this.listPos.getPositions();
   }

  ngOnInit(): void {
    // let positions = this.listPos.getPositions();
    // console.log(positions);
  }

  

}
