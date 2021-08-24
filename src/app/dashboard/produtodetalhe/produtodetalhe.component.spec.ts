import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutodetalheComponent } from './produtodetalhe.component';

describe('ProdutodetalheComponent', () => {
  let component: ProdutodetalheComponent;
  let fixture: ComponentFixture<ProdutodetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutodetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutodetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
