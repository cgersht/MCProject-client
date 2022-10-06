import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCounselorComponent } from './add-counselor.component';

describe('AddCounselorComponent', () => {
  let component: AddCounselorComponent;
  let fixture: ComponentFixture<AddCounselorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCounselorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCounselorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
