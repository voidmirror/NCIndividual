import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduserFormComponent } from './adduser-form.component';

describe('AdduserFormComponent', () => {
  let component: AdduserFormComponent;
  let fixture: ComponentFixture<AdduserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdduserFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
