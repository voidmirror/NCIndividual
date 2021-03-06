import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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
    description: new FormControl(),
    category: new FormControl()
  });

  deleteWareForm = new FormGroup({
    id: new FormControl()
  });

  constructor(private positionService: PositionService,
    private router: Router) {
    
   }

  ngOnInit(): void {
  }

  onAddSubmit(): void {
    let pos = new Position(this.addWareForm.value.name, this.addWareForm.value.price, this.addWareForm.value.description, this.addWareForm.value.category);
    
    let save = this.positionService.savePosition(pos)
    save.subscribe(data => {
      pos = data;
    })
    this.router.navigate(['contacts']);
    this.router.navigate(['/']);
  }

  onDeleteSubmit(): void {
    
    
      this.positionService.getPositionById(this.deleteWareForm.value.id).subscribe(data => {
        this.positionService.deletePosition(data);
        
      }, (error) => console.log('ID not found'));

    
  }

}
