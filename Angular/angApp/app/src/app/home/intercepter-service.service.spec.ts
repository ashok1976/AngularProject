import { TestBed } from '@angular/core/testing';

import { IntercepterServiceService } from './intercepter-service.service';

describe('IntercepterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntercepterServiceService = TestBed.get(IntercepterServiceService);
    expect(service).toBeTruthy();
  });
});
