import { TestBed } from '@angular/core/testing';

import { AssetsGuardService } from './assets-guard.service';

describe('AssetsGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssetsGuardService = TestBed.get(AssetsGuardService);
    expect(service).toBeTruthy();
  });
});
