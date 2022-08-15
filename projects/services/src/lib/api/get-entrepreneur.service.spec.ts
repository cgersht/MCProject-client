import { TestBed } from '@angular/core/testing';

import { GetEntrepreneurService } from './get-entrepreneur.service';

describe('GetEntrepreneurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetEntrepreneurService = TestBed.get(GetEntrepreneurService);
    expect(service).toBeTruthy();
  });
});
