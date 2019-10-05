import { TestBed } from '@angular/core/testing';

import { CatproService } from './catpro.service';

describe('CatproService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatproService = TestBed.get(CatproService);
    expect(service).toBeTruthy();
  });
});
