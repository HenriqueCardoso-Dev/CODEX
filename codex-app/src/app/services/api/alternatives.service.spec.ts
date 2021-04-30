import { TestBed } from '@angular/core/testing';

import { AlternativesService } from './alternatives.service';

describe('AlternativesService', () => {
  let service: AlternativesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlternativesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
