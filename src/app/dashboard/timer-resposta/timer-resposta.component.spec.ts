import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerRespostaComponent } from './timer-resposta.component';

describe('TimerRespostaComponent', () => {
  let component: TimerRespostaComponent;
  let fixture: ComponentFixture<TimerRespostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerRespostaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerRespostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
