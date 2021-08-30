import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PositionService } from '../position-service.service';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-addcategory-form',
  templateUrl: './addcategory-form.component.html',
  styleUrls: ['./addcategory-form.component.css']
})
export class AddcategoryFormComponent implements OnInit {

  categoryForm = new FormGroup({
    name: new FormControl()
  });

  constructor(private positionService: PositionService) { }

  ngOnInit(): void {
  }

  public saveCategory() {
    this.positionService.saveCategory(this.categoryForm.value.name);
    this.positionService.retrieveAllCategories();
    location.reload();
  }

}
