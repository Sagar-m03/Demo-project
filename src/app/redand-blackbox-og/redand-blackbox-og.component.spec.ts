import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedandBlackboxOGComponent } from './redand-blackbox-og.component';

describe('RedandBlackboxOGComponent', () => {
  let component: RedandBlackboxOGComponent;
  let fixture: ComponentFixture<RedandBlackboxOGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RedandBlackboxOGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedandBlackboxOGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
