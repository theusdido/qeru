import { TestBed } from '@angular/core/testing';

import { PropagandaService } from './propaganda.service';

describe('PropagandaService', () => {
  let service: PropagandaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropagandaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
