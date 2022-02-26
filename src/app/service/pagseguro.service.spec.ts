import { TestBed } from '@angular/core/testing';

import { PagseguroService } from './pagseguro.service';

describe('PagseguroService', () => {
  let service: PagseguroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagseguroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
