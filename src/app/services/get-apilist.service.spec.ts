import { TestBed } from '@angular/core/testing';

import { GetApilistService } from './get-apilist.service';

describe('GetApilistService', () => {
  let service: GetApilistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetApilistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
