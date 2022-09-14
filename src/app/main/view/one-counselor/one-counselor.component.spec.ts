import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCounselorComponent } from './one-counselor.component';

describe('OneCounselorComponent', () => {
  let component: OneCounselorComponent;
  let fixture: ComponentFixture<OneCounselorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneCounselorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneCounselorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
