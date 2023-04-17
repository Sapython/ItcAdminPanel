import { OutstationcompletedComponent } from './../../dashboard/dialogs/outstationcompleted/outstationcompleted.component';
import { RiderenataltableinfoComponent } from './../../dashboard/dialogs/riderenataltableinfo/riderenataltableinfo.component';
import { OutstaionCompleteInfoComponent } from './../dialogs/outstaion-complete-info/outstaion-complete-info.component';
import { MatConfirmDialogComponent } from './../dialogs/mat-confirm-dialog/mat-confirm-dialog.component';
import { BookingDetailsOfOutstationComponent } from './../dialogs/booking-details-of-outstation/booking-details-of-outstation.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { RecentbookingassignguideComponent } from '../../dashboard/dialogs/recentbookingassignguide/recentbookingassignguide.component';
import { RecentbookingbookingdetailsComponent } from '../../dashboard/dialogs/recentbookingbookingdetails/recentbookingbookingdetails.component';
import { AssignDriverDialogComponent } from '../dialogs/assign-driver-dialog/assign-driver-dialog.component';
import { DatabaseService } from 'src/app/services/database/database.service';
import { OutstationassignguideComponent } from '../../dashboard/dialogs/outstationassignguide/outstationassignguide.component';
import { DataProvider } from 'src/app/providers/data.provider';

@Component({
  selector: 'app-outstations',
  templateUrl: './outstations.component.html',
  styleUrls: ['./outstations.component.scss']
})
export class OutstationsComponent implements OnInit {

  panelOpenState: boolean = false;
  outstationBookingList: any[] = []

  constructor(private dialog: MatDialog, private database: DatabaseService, private dataProvider:DataProvider) { }
  bookingOutstaion(data:any) {
    
    this.dialog.open(OutstationassignguideComponent)
    this.dataProvider.booking = null;
    this.dataProvider.booking = data;
  }
  onCancel() {
    this.dialog.open(MatConfirmDialogComponent)
  }
  outstationCompleteInfo() {
    this.dialog.open(OutstationcompletedComponent)
  }
  onComplete() {
    this.dialog.open(OutstaionCompleteInfoComponent)
  }
  onReassignMenu() {
    this.dialog.open(AssignDriverDialogComponent)
  }
  onInfoMenu() {
    this.dialog.open(BookingDetailsOfOutstationComponent)
  }

  ngOnInit() {
    this.guideBooking();
  }

  guideBooking() {
    this.database.getRideOutstationBookings().then((res) => {
      res.forEach((element: any) => {
        this.outstationBookingList.push({
          ...element.data(),
          id: element.id
        })
      })
      console.log("this.outstation", this.outstationBookingList);
    })
  }

  action(action:string){
    if(action == "completed"){
      this.database.updateBooking(this.dataProvider.booking.id, {status:"completed"}).then((res)=>{})
    }
    if(action == "cancelled"){
      this.database.updateBooking(this.dataProvider.booking.id, {status:"cancelled"}).then((res)=>{})
    }

  } 


}
