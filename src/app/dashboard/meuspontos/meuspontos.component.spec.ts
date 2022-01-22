import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuspontosComponent } from './meuspontos.component';

describe('MeuspontosComponent', () => {
  let component: MeuspontosComponent;
  let fixture: ComponentFixture<MeuspontosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuspontosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuspontosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
