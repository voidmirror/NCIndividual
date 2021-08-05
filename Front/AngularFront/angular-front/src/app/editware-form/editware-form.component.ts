import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Position } from '../Position';
import { PositionService } from '../position-service.service';

@Component({
  selector: 'app-editware-form',
  templateUrl: './editware-form.component.html',
  styleUrls: ['./editware-form.component.css']
})
export class EditwareFormComponent implements OnInit {

  @Input() pos!: Position;

  editWareForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  });

  constructor(private positionService: PositionService) { }

  ngOnInit(): void {
  }

  public editPosition(): void {
    let position = new Position(this.editWareForm.value.name == null ? this.pos.name : this.editWareForm.value.name,
      this.editWareForm.value.price == null ? this.pos.price : this.editWareForm.value.price,
      this.editWareForm.value.description == null ? this.pos.description : this.editWareForm.value.description);

    position.id = this.pos.id;
    this.positionService.editPosition(position);
    location.reload();
  }

}
