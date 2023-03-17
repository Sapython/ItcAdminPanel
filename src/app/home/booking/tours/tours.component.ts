import { TourwiseBookingInfoComponent } from './../dialogs/tourwise-booking-info/tourwise-booking-info.component';
import { TourCompleteInfoComponent } from './../dialogs/tour-complete-info/tour-complete-info.component';
import { BookingDialogComponent } from './../dialogs/booking-dialog/booking-dialog.component';
import { MatConfirmDialogComponent } from './../dialogs/mat-confirm-dialog/mat-confirm-dialog.component';
import { AssignGuideDialogComponent } from './../dialogs/assign-guide-dialog/assign-guide-dialog.component';
import { MatDialog} from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent {
  constructor(private dialog:MatDialog){}
  tourPendingSucc(){
    this.dialog.open(AssignGuideDialogComponent)
  }
  onCancel(){
    this.dialog.open(MatConfirmDialogComponent)
  }
  onPendingInfo(){
    this.dialog.open(BookingDialogComponent)
  }
  tourCompletedInfo(){
    this.dialog.open(TourCompleteInfoComponent)
  }
  onTourwiseInfo(){
    this.dialog.open(TourwiseBookingInfoComponent)
  }
  onRespond(){
    this.dialog.open(AssignGuideDialogComponent)
  }
}
