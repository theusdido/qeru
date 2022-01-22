import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropagandaVisualizarComponent } from './propaganda-visualizar.component';

describe('PropagandaVisualizarComponent', () => {
  let component: PropagandaVisualizarComponent;
  let fixture: ComponentFixture<PropagandaVisualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropagandaVisualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropagandaVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
