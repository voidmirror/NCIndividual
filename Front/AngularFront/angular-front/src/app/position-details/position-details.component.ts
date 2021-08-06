import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Position } from '../Position';
import { PositionService } from '../position-service.service';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-position-details',
  templateUrl: './position-details.component.html',
  styleUrls: ['./position-details.component.css']
})
export class PositionDetailsComponent implements OnInit {

  @Input() pos!: Position;

  constructor(private positionService: PositionService,
              private modalService: NgbModal,
              public userService: UserService) { }

  ngOnInit(): void {
  }

  public openPopup(content: any) {
    const modalRef = this.modalService.open(content);
  }

}
