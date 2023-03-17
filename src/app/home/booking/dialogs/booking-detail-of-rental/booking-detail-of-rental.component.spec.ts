import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDetailOfRentalComponent } from './booking-detail-of-rental.component';

describe('BookingDetailOfRentalComponent', () => {
  let component: BookingDetailOfRentalComponent;
  let fixture: ComponentFixture<BookingDetailOfRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingDetailOfRentalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingDetailOfRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
