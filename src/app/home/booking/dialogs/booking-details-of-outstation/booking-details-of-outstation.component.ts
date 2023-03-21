import { RecentbookingassignguideComponent } from './../../../dashboard/dialogs/recentbookingassignguide/recentbookingassignguide.component';
import { AssignGuideDialogComponent } from './../assign-guide-dialog/assign-guide-dialog.component';
import { OutstaionCompleteInfoComponent } from './../outstaion-complete-info/outstaion-complete-info.component';
import { ConfirmDeleteComponent } from './../../../dashboard/dialogs/confirm-delete/confirm-delete.component';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { OutstationassignguideComponent } from 'src/app/home/dashboard/dialogs/outstationassignguide/outstationassignguide.component';

@Component({
  selector: 'app-booking-details-of-outstation',
  templateUrl: './booking-details-of-outstation.component.html',
  styleUrls: ['./booking-details-of-outstation.component.scss']
})
export class BookingDetailsOfOutstationComponent {
  title:any='Booking Details of Outstation';
  constructor(private dialog:MatDialog){}
  onAccept(){
this.dialog.open(OutstationassignguideComponent)
  }
  onDelete(){
this.dialog.open(ConfirmDeleteComponent)
  }
}
