import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BasketService } from '../basket.service';
import { Position } from '../Position';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() pos!: Position;

  constructor(private basketService: BasketService,
              private modalService: NgbModal) {
    // this.pos = pos;
   }

  ngOnInit(): void {
  }

  addToBasket(pos: Position): void {
    this.basketService.addPosition(pos);
  }

  public openPopup(content: any) {
    const modalRef = this.modalService.open(content);
  }

}
