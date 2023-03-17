import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteInfoBdrDialogComponent } from './complete-info-bdr-dialog.component';

describe('CompleteInfoBdrDialogComponent', () => {
  let component: CompleteInfoBdrDialogComponent;
  let fixture: ComponentFixture<CompleteInfoBdrDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteInfoBdrDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteInfoBdrDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
