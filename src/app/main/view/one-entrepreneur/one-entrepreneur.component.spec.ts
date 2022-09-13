import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneEntrepreneurComponent } from './one-entrepreneur.component';

describe('OneEntrepreneurComponent', () => {
  let component: OneEntrepreneurComponent;
  let fixture: ComponentFixture<OneEntrepreneurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneEntrepreneurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneEntrepreneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
