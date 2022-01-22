import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabelecimentoImagensComponent } from './estabelecimento-imagens.component';

describe('EstabelecimentoImagensComponent', () => {
  let component: EstabelecimentoImagensComponent;
  let fixture: ComponentFixture<EstabelecimentoImagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstabelecimentoImagensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabelecimentoImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
