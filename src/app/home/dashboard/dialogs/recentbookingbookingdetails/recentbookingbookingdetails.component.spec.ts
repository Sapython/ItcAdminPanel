import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentbookingbookingdetailsComponent } from './recentbookingbookingdetails.component';

describe('RecentbookingbookingdetailsComponent', () => {
  let component: RecentbookingbookingdetailsComponent;
  let fixture: ComponentFixture<RecentbookingbookingdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentbookingbookingdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentbookingbookingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
