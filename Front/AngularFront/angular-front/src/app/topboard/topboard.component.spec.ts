import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopboardComponent } from './topboard.component';

describe('TopboardComponent', () => {
  let component: TopboardComponent;
  let fixture: ComponentFixture<TopboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
