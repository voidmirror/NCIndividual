import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BasketService } from '../basket.service';
import { Position } from '../Position';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() pos!: Position;
  @Input() isInCatalog: boolean = false;
  @Input() isSelected: boolean = false;

  constructor(public basketService: BasketService,
    public userService: UserService,
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

  public isLogged(): boolean {
    // console.log(this.basketService.userService.currentUser.username == undefined);
    return this.basketService.userService.currentUser.username != undefined;
  }

}
