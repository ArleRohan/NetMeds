import { TestBed } from '@angular/core/testing';

import { AminoAcidService } from './amino-acid.service';

describe('AminoAcidService', () => {
  let service: AminoAcidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AminoAcidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
