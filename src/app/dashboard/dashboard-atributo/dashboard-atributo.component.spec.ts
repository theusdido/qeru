import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAtributoComponent } from './dashboard-atributo.component';

describe('DashboardAtributoComponent', () => {
  let component: DashboardAtributoComponent;
  let fixture: ComponentFixture<DashboardAtributoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAtributoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAtributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
