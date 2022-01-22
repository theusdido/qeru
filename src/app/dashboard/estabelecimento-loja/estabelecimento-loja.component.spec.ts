import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabelecimentoLojaComponent } from './estabelecimento-loja.component';

describe('EstabelecimentoLojaComponent', () => {
  let component: EstabelecimentoLojaComponent;
  let fixture: ComponentFixture<EstabelecimentoLojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstabelecimentoLojaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabelecimentoLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
