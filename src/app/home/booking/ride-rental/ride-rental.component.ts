import { RecentbookingassignguideComponent } from './../../dashboard/dialogs/recentbookingassignguide/recentbookingassignguide.component';
import { AssignDriverDialogComponent } from './../dialogs/assign-driver-dialog/assign-driver-dialog.component';
import { RecentbookingbookingdetailsComponent } from './../../dashboard/dialogs/recentbookingbookingdetails/recentbookingbookingdetails.component';
import { TableinfoComponent } from './../../dashboard/dialogs/tableinfo/tableinfo.component';
import { RiderenataltableinfoComponent } from './../../dashboard/dialogs/riderenataltableinfo/riderenataltableinfo.component';
import { CompleteInfoBdrDialogComponent } from './../dialogs/complete-info-bdr-dialog/complete-info-bdr-dialog.component';
import { BookingDetailOfRentalComponent } from './../dialogs/booking-detail-of-rental/booking-detail-of-rental.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatConfirmDialogComponent } from '../dialogs/mat-confirm-dialog/mat-confirm-dialog.component';
import { BookingDialogComponent } from '../dialogs/booking-dialog/booking-dialog.component';
import { DataProvider } from 'src/app/providers/data.provider';
import { DatabaseService } from 'src/app/services/database/database.service';
import { OutstationassignguideComponent } from '../../dashboard/dialogs/outstationassignguide/outstationassignguide.component';
import { OutstationcompletedComponent } from '../../dashboard/dialogs/outstationcompleted/outstationcompleted.component';
import { BookingDetailsOfOutstationComponent } from '../dialogs/booking-details-of-outstation/booking-details-of-outstation.component';
import { OutstaionCompleteInfoComponent } from '../dialogs/outstaion-complete-info/outstaion-complete-info.component';

@Component({
  selector: 'app-ride-rental',
  templateUrl: './ride-rental.component.html',
  styleUrls: ['./ride-rental.component.scss']
})
export class RideRentalComponent implements OnInit {

  panelOpenState: boolean = false;
  bookingList: any[] = []

  agentAvailable:number = 0;

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
    this.database.getRideRentalBookings().then((res) => {
      res.forEach((element: any) => {
        this.bookingList.push({
          ...element.data(),
          id: element.id
        })
      })
      console.log("this.Ride", this.bookingList);
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