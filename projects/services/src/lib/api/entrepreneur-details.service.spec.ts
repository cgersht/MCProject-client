import { TestBed } from '@angular/core/testing';

import { EntrepreneurDetailsService } from './entrepreneur-details.service';

describe('EntrepreneurDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntrepreneurDetailsService = TestBed.get(EntrepreneurDetailsService);
    expect(service).toBeTruthy();
  });
});
