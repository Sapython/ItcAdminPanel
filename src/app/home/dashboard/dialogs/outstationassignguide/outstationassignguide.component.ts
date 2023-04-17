import { OutstaionCompleteInfoComponent } from './../../../booking/dialogs/outstaion-complete-info/outstaion-complete-info.component';
import { BookingDetailsOfOutstationComponent } from './../../../booking/dialogs/booking-details-of-outstation/booking-details-of-outstation.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import { RecentbookingbookingdetailsComponent } from '../recentbookingbookingdetails/recentbookingbookingdetails.component';
import { FormControl } from '@angular/forms';
import { DataProvider } from 'src/app/providers/data.provider';
import { AlertsAndNotificationsService } from 'src/app/services/alerts-and-notification/alerts-and-notifications.service';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-outstationassignguide',
  templateUrl: './outstationassignguide.component.html',
  styleUrls: ['./outstationassignguide.component.scss']
})
export class OutstationassignguideComponent implements OnInit {
  
  myControl = new FormControl('');
  myControl2 = new FormControl('');
  guides: any[] = []
  drivers: any[] = []
  selectedGuide: any;
  selectedDriver: any;

  constructor(private dialog: MatDialog, private database:DatabaseService, private dataProvider:DataProvider, private alertify:AlertsAndNotificationsService) { }
  onCancel() {
    this.dialog.open(ConfirmDeleteComponent)
  }
  onAssign() {
    this.updateBooking();
    this.dialog.open(RecentbookingbookingdetailsComponent)
  }

  ngOnInit() {
    this.getGuides();
    this.getDriver();
    console.log("this.dataProvider.booking",this.dataProvider.booking);
  }





  getGuides() {
    this.database.guides().then((res) => {
      res.forEach((element: any) => {
        this.guides.push({
          ...element.data(),
          id: element.id
        })
      })
      console.log("this.guides", this.guides);
    })
  }

  getDriver() {
    this.database.getDrivers().then((res) => {
      res.forEach((element: any) => {
        this.drivers.push({
          ...element.data(),
          id: element.id
        })
      })
      console.log("this.drivers", this.drivers);
    })
  }

  updateBooking(){
    const data={
      ...this.dataProvider.booking,
      guide:this.myControl.value,
      driver:this.myControl2.value
    }
    console.log("data",data);


    this.database.updateBooking(this.dataProvider.booking.id, data).then((res)=>{
      this.alertify.presentToast("Booking Updated Successfully")
    })
  }
}
