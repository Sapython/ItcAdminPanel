import { CompleteInfoBdrDialogComponent } from './../dialogs/complete-info-bdr-dialog/complete-info-bdr-dialog.component';
import { BookingDetailOfRentalComponent } from './../dialogs/booking-detail-of-rental/booking-detail-of-rental.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatConfirmDialogComponent } from '../dialogs/mat-confirm-dialog/mat-confirm-dialog.component';
import { BookingDialogComponent } from '../dialogs/booking-dialog/booking-dialog.component';

@Component({
  selector: 'app-ride-rental',
  templateUrl: './ride-rental.component.html',
  styleUrls: ['./ride-rental.component.scss']
})
export class RideRentalComponent {
  panelOpenState:boolean=false;
constructor(private dialog:MatDialog){}
onDelete(){
  this.dialog.open(MatConfirmDialogComponent)
}
onInfo(){
  this.dialog.open(BookingDetailOfRentalComponent)
}
bookingDetail(){
  this.dialog.open(BookingDialogComponent)
}
completedBookingInfo(){
  this.dialog.open(CompleteInfoBdrDialogComponent)
}
}
