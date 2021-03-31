import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegociacoesComponent } from './negociacoes.component';

describe('NegociacoesComponent', () => {
  let component: NegociacoesComponent;
  let fixture: ComponentFixture<NegociacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegociacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegociacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
