import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourCompleteInfoComponent } from './tour-complete-info.component';

describe('TourCompleteInfoComponent', () => {
  let component: TourCompleteInfoComponent;
  let fixture: ComponentFixture<TourCompleteInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourCompleteInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourCompleteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
