import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecadastroPerfilComponent } from './precadastro-perfil.component';

describe('PrecadastroPerfilComponent', () => {
  let component: PrecadastroPerfilComponent;
  let fixture: ComponentFixture<PrecadastroPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecadastroPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecadastroPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
