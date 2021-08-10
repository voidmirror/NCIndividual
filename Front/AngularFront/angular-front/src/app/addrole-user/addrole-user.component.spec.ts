import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddroleUserComponent } from './addrole-user.component';

describe('AddroleUserComponent', () => {
  let component: AddroleUserComponent;
  let fixture: ComponentFixture<AddroleUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddroleUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddroleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
