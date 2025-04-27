import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselandvideoOGComponent } from './carouselandvideo-og.component';

describe('CarouselandvideoOGComponent', () => {
  let component: CarouselandvideoOGComponent;
  let fixture: ComponentFixture<CarouselandvideoOGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselandvideoOGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselandvideoOGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
