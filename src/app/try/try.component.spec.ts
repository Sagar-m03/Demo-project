import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryComponent } from './try.component';

describe('TryComponent', () => {
  let component: TryComponent;
  let fixture: ComponentFixture<TryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
