import { TestBed } from '@angular/core/testing';

import { SelectedNevigationService } from './selected-nevigation.service';

describe('SelectedNevigationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedNevigationService = TestBed.get(SelectedNevigationService);
    expect(service).toBeTruthy();
  });
});
