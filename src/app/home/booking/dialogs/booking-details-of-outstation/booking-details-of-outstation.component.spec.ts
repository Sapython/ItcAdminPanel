import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDetailsOfOutstationComponent } from './booking-details-of-outstation.component';

describe('BookingDetailsOfOutstationComponent', () => {
  let component: BookingDetailsOfOutstationComponent;
  let fixture: ComponentFixture<BookingDetailsOfOutstationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingDetailsOfOutstationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingDetailsOfOutstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
