import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenucardimgOGComponent } from './menucardimg-og.component';

describe('MenucardimgOGComponent', () => {
  let component: MenucardimgOGComponent;
  let fixture: ComponentFixture<MenucardimgOGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenucardimgOGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenucardimgOGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
