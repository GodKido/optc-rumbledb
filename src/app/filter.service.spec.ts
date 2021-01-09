import { TestBed } from '@angular/core/testing';

import { FilterIconsService } from './filter.service';

describe('FilterIconsService', () => {
  let service: FilterIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
