import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegociacaoHomeComponent } from './negociacao-home.component';

describe('NegociacaoHomeComponent', () => {
  let component: NegociacaoHomeComponent;
  let fixture: ComponentFixture<NegociacaoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegociacaoHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegociacaoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
