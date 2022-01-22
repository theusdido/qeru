import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceiroCardComponent } from './financeiro-card.component';

describe('FinanceiroCardComponent', () => {
  let component: FinanceiroCardComponent;
  let fixture: ComponentFixture<FinanceiroCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceiroCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceiroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
