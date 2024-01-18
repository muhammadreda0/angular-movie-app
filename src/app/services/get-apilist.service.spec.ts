import { TestBed } from '@angular/core/testing';

import { GetAPIListService } from './get-apilist.service';

describe('GetAPIListService', () => {
  let service: GetAPIListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAPIListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
