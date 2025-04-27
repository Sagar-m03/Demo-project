import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedandblackComponent } from './redandblack.component';

describe('RedandblackComponent', () => {
  let component: RedandblackComponent;
  let fixture: ComponentFixture<RedandblackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RedandblackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedandblackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
