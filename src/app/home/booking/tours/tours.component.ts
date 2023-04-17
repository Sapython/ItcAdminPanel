import { TourassigninfoComponent } from './../../dashboard/dialogs/tourassigninfo/tourassigninfo.component';
import { ConfirmDeleteComponent } from './../../dashboard/dialogs/confirm-delete/confirm-delete.component';
import { TourwiseBookingInfoComponent } from './../dialogs/tourwise-booking-info/tourwise-booking-info.component';
import { TourCompleteInfoComponent } from './../dialogs/tour-complete-info/tour-complete-info.component';
import { BookingDialogComponent } from './../dialogs/booking-dialog/booking-dialog.component';
import { MatConfirmDialogComponent } from './../dialogs/mat-confirm-dialog/mat-confirm-dialog.component';
import { AssignGuideDialogComponent } from './../dialogs/assign-guide-dialog/assign-guide-dialog.component';
import { MatDialog} from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { RiderenataltableinfoComponent } from '../../dashboard/dialogs/riderenataltableinfo/riderenataltableinfo.component';
import { TableinfoComponent } from '../../dashboard/dialogs/tableinfo/tableinfo.component';
import { DataProvider } from 'src/app/providers/data.provider';
import { DatabaseService } from 'src/app/services/database/database.service';
import { OutstationassignguideComponent } from '../../dashboard/dialogs/outstationassignguide/outstationassignguide.component';
import { OutstationcompletedComponent } from '../../dashboard/dialogs/outstationcompleted/outstationcompleted.component';
import { AssignDriverDialogComponent } from '../dialogs/assign-driver-dialog/assign-driver-dialog.component';
import { BookingDetailsOfOutstationComponent } from '../dialogs/booking-details-of-outstation/booking-details-of-outstation.component';
import { OutstaionCompleteInfoComponent } from '../dialogs/outstaion-complete-info/outstaion-complete-info.component';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {
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
    this.tourBooking();
  }

  tourBooking() {
    this.database.getTourBookings().then((res) => {
      res.forEach((element: any) => {
        this.bookingList.push({
          ...element.data(),
          id: element.id
        })
      })
      console.log("this.tour", this.bookingList);
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