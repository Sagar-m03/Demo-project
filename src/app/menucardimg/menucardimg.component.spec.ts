import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenucardimgComponent } from './menucardimg.component';

describe('MenucardimgComponent', () => {
  let component: MenucardimgComponent;
  let fixture: ComponentFixture<MenucardimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenucardimgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenucardimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
