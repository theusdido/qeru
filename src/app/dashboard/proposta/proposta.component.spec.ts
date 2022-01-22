import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropostaComponent } from './proposta.component';

describe('PropostaComponent', () => {
  let component: PropostaComponent;
  let fixture: ComponentFixture<PropostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropostaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
