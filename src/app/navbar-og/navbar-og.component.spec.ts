import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOGComponent } from './navbar-og.component';

describe('NavbarOGComponent', () => {
  let component: NavbarOGComponent;
  let fixture: ComponentFixture<NavbarOGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarOGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarOGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
