import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCounselorTypeComponent } from './add-counselor-type.component';

describe('AddCounselorTypeComponent', () => {
  let component: AddCounselorTypeComponent;
  let fixture: ComponentFixture<AddCounselorTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCounselorTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCounselorTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
