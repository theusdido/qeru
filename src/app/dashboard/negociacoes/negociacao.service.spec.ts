import { TestBed } from '@angular/core/testing';

import { NegociacaoService } from './negociacao.service';

describe('NegociacaoService', () => {
  let service: NegociacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NegociacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
