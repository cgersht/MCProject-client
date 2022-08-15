import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockAndDateComponent } from './clock-and-date.component';

describe('ClockAndDateComponent', () => {
  let component: ClockAndDateComponent;
  let fixture: ComponentFixture<ClockAndDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockAndDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockAndDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
