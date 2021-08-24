import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenegociacaoComponent } from './prenegociacao.component';

describe('PrenegociacaoComponent', () => {
  let component: PrenegociacaoComponent;
  let fixture: ComponentFixture<PrenegociacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrenegociacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenegociacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
