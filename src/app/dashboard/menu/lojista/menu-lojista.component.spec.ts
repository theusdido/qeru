import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLojistaComponent } from './menu-lojista.component';

describe('MenuLojistaComponent', () => {
  let component: MenuLojistaComponent;
  let fixture: ComponentFixture<MenuLojistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLojistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLojistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
