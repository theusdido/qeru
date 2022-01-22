import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutofotoComponent } from './produtofoto.component';

describe('ProdutofotoComponent', () => {
  let component: ProdutofotoComponent;
  let fixture: ComponentFixture<ProdutofotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutofotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutofotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
