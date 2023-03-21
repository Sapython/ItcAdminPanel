import { RecentbookingassignguideComponent } from './../../dashboard/dialogs/recentbookingassignguide/recentbookingassignguide.component';
import { AssignDriverDialogComponent } from './../dialogs/assign-driver-dialog/assign-driver-dialog.component';
import { RecentbookingbookingdetailsComponent } from './../../dashboard/dialogs/recentbookingbookingdetails/recentbookingbookingdetails.component';
import { TableinfoComponent } from './../../dashboard/dialogs/tableinfo/tableinfo.component';
import { RiderenataltableinfoComponent } from './../../dashboard/dialogs/riderenataltableinfo/riderenataltableinfo.component';
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
  this.dialog.open(TableinfoComponent)
}
bookingDetail(){
  this.dialog.open(BookingDialogComponent)
}
completedBookingInfo(){
  this.dialog.open(CompleteInfoBdrDialogComponent)
}
onSucc(){
  this.dialog.open(TableinfoComponent)
}
onComplete(){
  this.dialog.open(RecentbookingbookingdetailsComponent)
}
onReassignMenu(){
    this.dialog.open(AssignDriverDialogComponent)
}
onInfoMenu(){
  this.dialog.open(RiderenataltableinfoComponent)
}
func(event:any){
  event.stopPropagation();
}
}
