import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojistaComponent } from './lojista.component';

describe('LojistaComponent', () => {
  let component: LojistaComponent;
  let fixture: ComponentFixture<LojistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LojistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LojistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
