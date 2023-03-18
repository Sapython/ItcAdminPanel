import { OutstaionCompleteInfoComponent } from './../dialogs/outstaion-complete-info/outstaion-complete-info.component';
import { MatConfirmDialogComponent } from './../dialogs/mat-confirm-dialog/mat-confirm-dialog.component';
import { BookingDetailsOfOutstationComponent } from './../dialogs/booking-details-of-outstation/booking-details-of-outstation.component';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-outstations',
  templateUrl: './outstations.component.html',
  styleUrls: ['./outstations.component.scss']
})
export class OutstationsComponent {
  panelOpenState:boolean=false;
constructor(private dialog:MatDialog){}
bookingOutstaion(){
  this.dialog.open(BookingDetailsOfOutstationComponent)
}
onCancel(){
this.dialog.open(MatConfirmDialogComponent)
}
outstationCompleteInfo(){
  this.dialog.open(OutstaionCompleteInfoComponent)
}
}
