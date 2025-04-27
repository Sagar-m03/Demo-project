import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTOPComponent } from './carousel-top.component';

describe('CarouselTOPComponent', () => {
  let component: CarouselTOPComponent;
  let fixture: ComponentFixture<CarouselTOPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselTOPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselTOPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
