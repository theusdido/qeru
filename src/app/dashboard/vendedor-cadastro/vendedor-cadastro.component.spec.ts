import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorCadastroComponent } from './vendedor-cadastro.component';

describe('VendedorCadastroComponent', () => {
  let component: VendedorCadastroComponent;
  let fixture: ComponentFixture<VendedorCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedorCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
