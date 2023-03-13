import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignGuideDialogComponent } from './assign-guide-dialog.component';

describe('AssignGuideDialogComponent', () => {
  let component: AssignGuideDialogComponent;
  let fixture: ComponentFixture<AssignGuideDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignGuideDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignGuideDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
