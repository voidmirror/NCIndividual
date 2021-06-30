import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppanelAnonComponent } from './toppanel-anon.component';

describe('ToppanelAnonComponent', () => {
  let component: ToppanelAnonComponent;
  let fixture: ComponentFixture<ToppanelAnonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToppanelAnonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppanelAnonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
