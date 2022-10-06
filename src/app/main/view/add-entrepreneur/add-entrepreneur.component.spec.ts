import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntrepreneurComponent } from './add-entrepreneur.component';

describe('AddEntrepreneurComponent', () => {
  let component: AddEntrepreneurComponent;
  let fixture: ComponentFixture<AddEntrepreneurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEntrepreneurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEntrepreneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
