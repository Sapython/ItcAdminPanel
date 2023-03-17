import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourwiseBookingInfoComponent } from './tourwise-booking-info.component';

describe('TourwiseBookingInfoComponent', () => {
  let component: TourwiseBookingInfoComponent;
  let fixture: ComponentFixture<TourwiseBookingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourwiseBookingInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourwiseBookingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
