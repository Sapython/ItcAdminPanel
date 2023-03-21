import { TourassigninfoComponent } from './../../dashboard/dialogs/tourassigninfo/tourassigninfo.component';
import { ConfirmDeleteComponent } from './../../dashboard/dialogs/confirm-delete/confirm-delete.component';
import { TourwiseBookingInfoComponent } from './../dialogs/tourwise-booking-info/tourwise-booking-info.component';
import { TourCompleteInfoComponent } from './../dialogs/tour-complete-info/tour-complete-info.component';
import { BookingDialogComponent } from './../dialogs/booking-dialog/booking-dialog.component';
import { MatConfirmDialogComponent } from './../dialogs/mat-confirm-dialog/mat-confirm-dialog.component';
import { AssignGuideDialogComponent } from './../dialogs/assign-guide-dialog/assign-guide-dialog.component';
import { MatDialog} from '@angular/material/dialog';
import { Component } from '@angular/core';
import { RiderenataltableinfoComponent } from '../../dashboard/dialogs/riderenataltableinfo/riderenataltableinfo.component';
import { TableinfoComponent } from '../../dashboard/dialogs/tableinfo/tableinfo.component';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent {
  constructor(private dialog:MatDialog){}
  tourPendingSucc(){
    this.dialog.open(TableinfoComponent)
  }
  onCancel(){
    this.dialog.open(MatConfirmDialogComponent)
  }
  onPendingInfo(){
    this.dialog.open(TableinfoComponent)
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
  onComplete(){
  }
  onReassignMenu(){
      this.dialog.open(AssignGuideDialogComponent)
  }
  onInfoMenu(){
    this.dialog.open(TourassigninfoComponent)
  }
}
