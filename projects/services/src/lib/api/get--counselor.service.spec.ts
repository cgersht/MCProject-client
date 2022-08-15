import { TestBed } from '@angular/core/testing';

import { GetCounselorService } from './get--counselor.service';

describe('GetCounselorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCounselorService = TestBed.get(GetCounselorService);
    expect(service).toBeTruthy();
  });
});
