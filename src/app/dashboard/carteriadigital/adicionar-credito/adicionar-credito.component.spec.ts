import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarCreditoComponent } from './adicionar-credito.component';

describe('AdicionarCreditoComponent', () => {
  let component: AdicionarCreditoComponent;
  let fixture: ComponentFixture<AdicionarCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
