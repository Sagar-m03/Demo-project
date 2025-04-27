import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgsectionComponent } from './imgsection.component';

describe('ImgsectionComponent', () => {
  let component: ImgsectionComponent;
  let fixture: ComponentFixture<ImgsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgsectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
