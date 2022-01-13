import { TestBed } from '@angular/core/testing';

import { C8yUtilsService } from './c8y-utils.service';

describe('C8yUtilsService', () => {
  let service: C8yUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(C8yUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
