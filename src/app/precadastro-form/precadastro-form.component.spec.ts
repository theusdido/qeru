import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecadastroFormComponent } from './precadastro-form.component';

describe('PrecadastroFormComponent', () => {
  let component: PrecadastroFormComponent;
  let fixture: ComponentFixture<PrecadastroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecadastroFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecadastroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
