import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentbookingassignguideComponent } from './recentbookingassignguide.component';

describe('RecentbookingassignguideComponent', () => {
  let component: RecentbookingassignguideComponent;
  let fixture: ComponentFixture<RecentbookingassignguideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentbookingassignguideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentbookingassignguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
