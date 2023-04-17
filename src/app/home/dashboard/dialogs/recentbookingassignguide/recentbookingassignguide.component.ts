import { RecentbookingbookingdetailsComponent } from './../recentbookingbookingdetails/recentbookingbookingdetails.component';
import { ConfirmDeleteComponent } from './../confirm-delete/confirm-delete.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database/database.service';
import { FormControl } from '@angular/forms';
import { DataProvider } from 'src/app/providers/data.provider';
import { AlertsAndNotificationsService } from 'src/app/services/alerts-and-notification/alerts-and-notifications.service';

@Component({
  selector: 'app-recentbookingassignguide',
  templateUrl: './recentbookingassignguide.component.html',
  styleUrls: ['./recentbookingassignguide.component.scss']
})
export class RecentbookingassignguideComponent implements OnInit {
  
  myControl = new FormControl('');
  guides: any[] = []
  selectedGuide: any;
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

  updateBooking(){
    const data={
      ...this.dataProvider.booking,
      guide:this.myControl.value
    }
    console.log("data",data);


    this.database.updateBooking(this.dataProvider.booking.id, data).then((res)=>{
      this.alertify.presentToast("Booking Updated Successfully")
    })
  }
}
