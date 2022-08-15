import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateAndClockComponent } from './date-and-clock.component';

describe('DateAndClockComponent', () => {
  let component: DateAndClockComponent;
  let fixture: ComponentFixture<DateAndClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateAndClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateAndClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
