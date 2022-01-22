import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecadastroComponent } from './precadastro.component';

describe('PrecadastroComponent', () => {
  let component: PrecadastroComponent;
  let fixture: ComponentFixture<PrecadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
