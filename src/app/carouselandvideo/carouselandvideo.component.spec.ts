import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselandvideoComponent } from './carouselandvideo.component';

describe('CarouselandvideoComponent', () => {
  let component: CarouselandvideoComponent;
  let fixture: ComponentFixture<CarouselandvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselandvideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselandvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
