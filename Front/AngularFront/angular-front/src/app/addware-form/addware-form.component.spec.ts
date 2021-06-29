import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwareFormComponent } from './addware-form.component';

describe('AddwareFormComponent', () => {
  let component: AddwareFormComponent;
  let fixture: ComponentFixture<AddwareFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddwareFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddwareFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
