import { TestBed } from '@angular/core/testing';

import { LojasoficiaisService } from './lojasoficiais.service';

describe('LojasoficiaisService', () => {
  let service: LojasoficiaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LojasoficiaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
