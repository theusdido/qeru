import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenegociacaoAtributosComponent } from './prenegociacao-atributos.component';

describe('PrenegociacaoAtributosComponent', () => {
  let component: PrenegociacaoAtributosComponent;
  let fixture: ComponentFixture<PrenegociacaoAtributosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrenegociacaoAtributosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenegociacaoAtributosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
