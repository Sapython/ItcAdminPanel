import { TourCompleteInfoComponent } from './../dialogs/tour-complete-info/tour-complete-info.component';
import { OutstaionCompleteInfoComponent } from './../dialogs/outstaion-complete-info/outstaion-complete-info.component';
import { BookingDetailsOfOutstationComponent } from './../dialogs/booking-details-of-outstation/booking-details-of-outstation.component';
import { MatConfirmDialogComponent } from './../dialogs/mat-confirm-dialog/mat-confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { RecentbookingassignguideComponent } from '../../dashboard/dialogs/recentbookingassignguide/recentbookingassignguide.component';
import { AssignDriverDialogComponent } from '../dialogs/assign-driver-dialog/assign-driver-dialog.component';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent {
  panelOpenState:boolean=false;
  // Head
  constructor(private dialog:MatDialog){}
  onSucc(){
    this.dialog.open(RecentbookingassignguideComponent)

  }
  onCancel(){
    this.dialog.open(MatConfirmDialogComponent)
  }
  onInfo(){
    this.dialog.open(BookingDetailsOfOutstationComponent)
  }
  completedBookingInfo(){
    this.dialog.open(TourCompleteInfoComponent)
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
