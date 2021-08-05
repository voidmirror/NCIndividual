import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditwareFormComponent } from './editware-form.component';

describe('EditwareFormComponent', () => {
  let component: EditwareFormComponent;
  let fixture: ComponentFixture<EditwareFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditwareFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditwareFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
