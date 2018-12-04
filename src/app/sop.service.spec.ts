import { TestBed } from '@angular/core/testing';

import { SopService } from './sop.service';

describe('SopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SopService = TestBed.get(SopService);
    expect(service).toBeTruthy();
  });
});
