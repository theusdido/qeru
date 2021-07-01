import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojistaAcessoComponent } from './lojista-acesso.component';

describe('LojistaAcessoComponent', () => {
  let component: LojistaAcessoComponent;
  let fixture: ComponentFixture<LojistaAcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LojistaAcessoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LojistaAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
