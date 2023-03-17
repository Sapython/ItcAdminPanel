import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideRentalComponent } from './ride-rental.component';

describe('RideRentalComponent', () => {
  let component: RideRentalComponent;
  let fixture: ComponentFixture<RideRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RideRentalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RideRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
