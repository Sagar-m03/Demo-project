import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParatwoComponent } from './paratwo.component';

describe('ParatwoComponent', () => {
  let component: ParatwoComponent;
  let fixture: ComponentFixture<ParatwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParatwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParatwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
