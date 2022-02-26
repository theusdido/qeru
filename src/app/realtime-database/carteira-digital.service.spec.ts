import { TestBed } from '@angular/core/testing';

import { CarteiraDigitalService } from './carteira-digital.service';

describe('CarteiraDigitalService', () => {
  let service: CarteiraDigitalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarteiraDigitalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
