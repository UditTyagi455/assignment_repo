import { TestBed } from '@angular/core/testing';

import { SerService } from './ser.service';

describe('SerService', () => {
  let service: SerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
