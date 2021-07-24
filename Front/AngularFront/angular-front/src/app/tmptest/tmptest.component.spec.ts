import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmptestComponent } from './tmptest.component';

describe('TmptestComponent', () => {
  let component: TmptestComponent;
  let fixture: ComponentFixture<TmptestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmptestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmptestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
