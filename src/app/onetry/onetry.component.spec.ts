import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnetryComponent } from './onetry.component';

describe('OnetryComponent', () => {
  let component: OnetryComponent;
  let fixture: ComponentFixture<OnetryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnetryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
