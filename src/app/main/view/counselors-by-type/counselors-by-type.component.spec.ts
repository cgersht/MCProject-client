import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounselorsByTypeComponent } from './counselors-by-type.component';

describe('CounselorsByTypeComponent', () => {
  let component: CounselorsByTypeComponent;
  let fixture: ComponentFixture<CounselorsByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounselorsByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounselorsByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
