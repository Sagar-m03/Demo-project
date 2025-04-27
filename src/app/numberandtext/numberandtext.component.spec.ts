import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberandtextComponent } from './numberandtext.component';

describe('NumberandtextComponent', () => {
  let component: NumberandtextComponent;
  let fixture: ComponentFixture<NumberandtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumberandtextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberandtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
