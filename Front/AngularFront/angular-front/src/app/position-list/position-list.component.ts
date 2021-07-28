import { Component, OnInit } from '@angular/core';
import { Position } from '../Position'
import { PositionService } from '../position-service.service'

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.css']
})
export class PositionListComponent implements OnInit {

  positions!: Position[];

  constructor(private positionService: PositionService) { }

  ngOnInit(): void {
    this.positionService.retrieveAllPositions().subscribe(data => {
      this.positions = data;
    });
  }

  public getPositions(): Position[] {
    // console.log(this.positions)
    return this.positions;
  }

}
