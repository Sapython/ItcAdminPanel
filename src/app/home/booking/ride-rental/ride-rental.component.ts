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
constructor(private dialog:MatDialog){}
onDelete(){
  this.dialog.open(MatConfirmDialogComponent)
}
onInfo(){
  this.dialog.open(BookingDialogComponent)
}
}
