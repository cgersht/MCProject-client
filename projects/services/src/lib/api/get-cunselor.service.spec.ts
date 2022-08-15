import { TestBed } from '@angular/core/testing';

import { GetCunselorService } from './get-cunselor.service';

describe('GetCunselorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCunselorService = TestBed.get(GetCunselorService);
    expect(service).toBeTruthy();
  });
});
