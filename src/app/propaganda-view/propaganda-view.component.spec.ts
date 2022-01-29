import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropagandaViewComponent } from './propaganda-view.component';

describe('PropagandaViewComponent', () => {
  let component: PropagandaViewComponent;
  let fixture: ComponentFixture<PropagandaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropagandaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropagandaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
