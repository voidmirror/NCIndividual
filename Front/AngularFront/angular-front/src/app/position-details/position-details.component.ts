import { Component, Input, OnInit } from '@angular/core';
import { Position } from '../Position';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-position-details',
  templateUrl: './position-details.component.html',
  styleUrls: ['./position-details.component.css']
})
export class PositionDetailsComponent implements OnInit {

  @Input() pos!: Position;

  constructor(userService: UserService) { }

  ngOnInit(): void {
  }

}
