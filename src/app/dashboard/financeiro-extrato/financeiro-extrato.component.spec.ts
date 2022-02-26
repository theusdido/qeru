import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceiroExtratoComponent } from './financeiro-extrato.component';

describe('FinanceiroExtratoComponent', () => {
  let component: FinanceiroExtratoComponent;
  let fixture: ComponentFixture<FinanceiroExtratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceiroExtratoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceiroExtratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
