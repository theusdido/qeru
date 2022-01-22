import { TestBed } from '@angular/core/testing';

import { PrecadastroService } from './precadastro.service';

describe('PrecadastroService', () => {
  let service: PrecadastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrecadastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
