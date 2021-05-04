import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributoOpcaoComponent } from './atributo-opcao.component';

describe('AtributoOpcaoComponent', () => {
  let component: AtributoOpcaoComponent;
  let fixture: ComponentFixture<AtributoOpcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtributoOpcaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtributoOpcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
