import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedandBlackboxComponent } from './redand-blackbox.component';

describe('RedandBlackboxComponent', () => {
  let component: RedandBlackboxComponent;
  let fixture: ComponentFixture<RedandBlackboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RedandBlackboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedandBlackboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
