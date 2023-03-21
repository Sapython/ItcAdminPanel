import { OutstaionCompleteInfoComponent } from './../../../booking/dialogs/outstaion-complete-info/outstaion-complete-info.component';
import { BookingDetailsOfOutstationComponent } from './../../../booking/dialogs/booking-details-of-outstation/booking-details-of-outstation.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import { RecentbookingbookingdetailsComponent } from '../recentbookingbookingdetails/recentbookingbookingdetails.component';

@Component({
  selector: 'app-outstationassignguide',
  templateUrl: './outstationassignguide.component.html',
  styleUrls: ['./outstationassignguide.component.scss']
})
export class OutstationassignguideComponent {
  constructor(private dialog:MatDialog){}
  onCancel(){
    this.dialog.open(ConfirmDeleteComponent)
  }
  onAssign(){
    this.dialog.open(OutstaionCompleteInfoComponent)
  }
}
