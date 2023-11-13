import { TestBed } from '@angular/core/testing';

import { NgxCountrySelectService } from './ngx-country-select.service';

describe('NgxCountrySelectService', () => {
  let service: NgxCountrySelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCountrySelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
