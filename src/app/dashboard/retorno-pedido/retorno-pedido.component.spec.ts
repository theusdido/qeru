import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetornoPedidoComponent } from './retorno-pedido.component';

describe('RetornoPedidoComponent', () => {
  let component: RetornoPedidoComponent;
  let fixture: ComponentFixture<RetornoPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetornoPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetornoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
