import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
  @Input() isInCatalog: boolean = false;
  @Input() isSelected: boolean = false;

  constructor(private basketService: BasketService,
              private modalService: NgbModal) {
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
