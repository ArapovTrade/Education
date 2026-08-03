import { TestBed } from '@angular/core/testing';

import { Seoserv } from './seoserv';

describe('Seoserv', () => {
  let service: Seoserv;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Seoserv);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
