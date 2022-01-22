import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojasoficiaisComponent } from './lojasoficiais.component';

describe('LojasoficiaisComponent', () => {
  let component: LojasoficiaisComponent;
  let fixture: ComponentFixture<LojasoficiaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LojasoficiaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LojasoficiaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
