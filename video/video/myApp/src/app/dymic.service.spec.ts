import { TestBed } from '@angular/core/testing';

import { DymicService } from './dymic.service';

describe('DymicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DymicService = TestBed.get(DymicService);
    expect(service).toBeTruthy();
  });
});
