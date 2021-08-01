import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { Position } from '../Position';
import { PositionService } from '../position-service.service';

@Component({
  selector: 'app-addware-form',
  templateUrl: './addware-form.component.html',
  styleUrls: ['./addware-form.component.css']
})
export class AddwareFormComponent implements OnInit {

  

  addWareForm = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  });

  constructor(/*private http: HttpService*/ /*private client: HttpClient*/ private positionService: PositionService) {
    
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // console.log(this.addWareForm.value);
    let pos = new Position(this.addWareForm.value.name, this.addWareForm.value.price, this.addWareForm.value.description);
    
    let save = this.positionService.savePosition(pos)
    console.log(save.subscribe(data => {
      pos = data;
    }))
    console.log(save);
    console.log(pos);
    
  }

}
