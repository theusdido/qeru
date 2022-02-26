import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutocadastroComponent } from './produtocadastro.component';

describe('ProdutocadastroComponent', () => {
  let component: ProdutocadastroComponent;
  let fixture: ComponentFixture<ProdutocadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutocadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutocadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
