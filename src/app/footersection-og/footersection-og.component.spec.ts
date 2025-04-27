import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootersectionOGComponent } from './footersection-og.component';

describe('FootersectionOGComponent', () => {
  let component: FootersectionOGComponent;
  let fixture: ComponentFixture<FootersectionOGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FootersectionOGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootersectionOGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
