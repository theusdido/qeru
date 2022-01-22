import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabelecimentoLojistaComponent } from './estabelecimento-lojista.component';

describe('EstabelecimentoLojistaComponent', () => {
  let component: EstabelecimentoLojistaComponent;
  let fixture: ComponentFixture<EstabelecimentoLojistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstabelecimentoLojistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabelecimentoLojistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
