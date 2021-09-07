import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAcessoComponent } from './cliente-acesso.component';

describe('ClienteAcessoComponent', () => {
  let component: ClienteAcessoComponent;
  let fixture: ComponentFixture<ClienteAcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteAcessoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
