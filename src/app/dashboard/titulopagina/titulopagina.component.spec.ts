import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulopaginaComponent } from './titulopagina.component';

describe('TitulopaginaComponent', () => {
  let component: TitulopaginaComponent;
  let fixture: ComponentFixture<TitulopaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitulopaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitulopaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
