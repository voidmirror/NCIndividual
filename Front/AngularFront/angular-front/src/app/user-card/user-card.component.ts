import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../User';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user!: User;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  public changeRole(): void {
    
  }
  
  public openPopup(content: any) {
    const modalRef = this.modalService.open(content);
  }

}
