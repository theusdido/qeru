import { TestBed } from '@angular/core/testing';

import { PontuacaoService } from './pontuacao.service';

describe('PontuacaoService', () => {
  let service: PontuacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PontuacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
