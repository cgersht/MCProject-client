import { TestBed } from '@angular/core/testing';

import { DirectivesService } from './directives.service';

describe('DirectivesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DirectivesService = TestBed.get(DirectivesService);
    expect(service).toBeTruthy();
  });
});
