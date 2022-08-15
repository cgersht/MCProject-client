import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CunselorsComponent } from './cunselors.component';

describe('CunselorsComponent', () => {
  let component: CunselorsComponent;
  let fixture: ComponentFixture<CunselorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CunselorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CunselorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
