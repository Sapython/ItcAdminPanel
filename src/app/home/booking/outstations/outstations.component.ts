import { OutstationcompletedComponent } from './../../dashboard/dialogs/outstationcompleted/outstationcompleted.component';
import { RiderenataltableinfoComponent } from './../../dashboard/dialogs/riderenataltableinfo/riderenataltableinfo.component';
import { OutstaionCompleteInfoComponent } from './../dialogs/outstaion-complete-info/outstaion-complete-info.component';
import { MatConfirmDialogComponent } from './../dialogs/mat-confirm-dialog/mat-confirm-dialog.component';
import { BookingDetailsOfOutstationComponent } from './../dialogs/booking-details-of-outstation/booking-details-of-outstation.component';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { RecentbookingassignguideComponent } from '../../dashboard/dialogs/recentbookingassignguide/recentbookingassignguide.component';
import { RecentbookingbookingdetailsComponent } from '../../dashboard/dialogs/recentbookingbookingdetails/recentbookingbookingdetails.component';
import { AssignDriverDialogComponent } from '../dialogs/assign-driver-dialog/assign-driver-dialog.component';

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
  this.dialog.open(OutstationcompletedComponent)
}
onComplete(){
  this.dialog.open(OutstaionCompleteInfoComponent)
}
onReassignMenu(){
    this.dialog.open(AssignDriverDialogComponent)
}
onInfoMenu(){
  this.dialog.open(BookingDetailsOfOutstationComponent)
}
}
