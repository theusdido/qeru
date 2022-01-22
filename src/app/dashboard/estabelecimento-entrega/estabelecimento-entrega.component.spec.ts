import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabelecimentoEntregaComponent } from './estabelecimento-entrega.component';

describe('EstabelecimentoEntregaComponent', () => {
  let component: EstabelecimentoEntregaComponent;
  let fixture: ComponentFixture<EstabelecimentoEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstabelecimentoEntregaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabelecimentoEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
