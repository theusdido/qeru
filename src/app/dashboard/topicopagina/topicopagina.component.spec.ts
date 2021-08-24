import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicopaginaComponent } from './topicopagina.component';

describe('TopicopaginaComponent', () => {
  let component: TopicopaginaComponent;
  let fixture: ComponentFixture<TopicopaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicopaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicopaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
