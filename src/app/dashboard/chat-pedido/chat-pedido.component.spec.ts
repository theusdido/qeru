import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPedidoComponent } from './chat-pedido.component';

describe('ChatPedidoComponent', () => {
  let component: ChatPedidoComponent;
  let fixture: ComponentFixture<ChatPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
