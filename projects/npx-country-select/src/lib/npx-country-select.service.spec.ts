import { TestBed } from '@angular/core/testing';

import { NpxCountrySelectService } from './npx-country-select.service';

describe('NpxCountrySelectService', () => {
  let service: NpxCountrySelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpxCountrySelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
