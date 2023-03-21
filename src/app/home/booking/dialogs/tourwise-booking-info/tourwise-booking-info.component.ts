import { AssignGuideDialogComponent } from './../assign-guide-dialog/assign-guide-dialog.component';
import { MatConfirmDialogComponent } from './../mat-confirm-dialog/mat-confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tourwise-booking-info',
  templateUrl: './tourwise-booking-info.component.html',
  styleUrls: ['./tourwise-booking-info.component.scss']
})
export class TourwiseBookingInfoComponent {
  constructor(private dialog:MatDialog){}
  onReassign(){
    this.dialog.open(AssignGuideDialogComponent)
  }
  onCancel(){
this.dialog.open(MatConfirmDialogComponent)
  }
}
