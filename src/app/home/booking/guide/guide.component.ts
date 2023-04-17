import { TourCompleteInfoComponent } from './../dialogs/tour-complete-info/tour-complete-info.component';
import { OutstaionCompleteInfoComponent } from './../dialogs/outstaion-complete-info/outstaion-complete-info.component';
import { BookingDetailsOfOutstationComponent } from './../dialogs/booking-details-of-outstation/booking-details-of-outstation.component';
import { MatConfirmDialogComponent } from './../dialogs/mat-confirm-dialog/mat-confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { RecentbookingassignguideComponent } from '../../dashboard/dialogs/recentbookingassignguide/recentbookingassignguide.component';
import { AssignDriverDialogComponent } from '../dialogs/assign-driver-dialog/assign-driver-dialog.component';
import { DatabaseService } from 'src/app/services/database/database.service';
import { DataProvider } from 'src/app/providers/data.provider';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {
  panelOpenState:boolean=false;
  guides:any[]=[]
  // Head
  constructor(private dialog:MatDialog, private database:DatabaseService, private dataProvider:DataProvider){}
  onSucc(data:any){
    this.dialog.open(RecentbookingassignguideComponent)
    this.dataProvider.booking = data;

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
  onReassignMenu(data:any){
    this.dialog.open(RecentbookingassignguideComponent)
    this.dataProvider.booking = data;
  }
  onInfoMenu(){
    this.dialog.open(BookingDetailsOfOutstationComponent)
  }

  guideBookingList:any[]=[];

  ngOnInit(){
    this.guideBooking();
    this.getGuides();
  }

  guideBooking(){
    this.database.getGuideBookings().then((res)=>{
      res.forEach((element:any)=>{
        this.guideBookingList.push({
          ...element.data(),
          id:element.id
        })
      })
      console.log("this.guideBookingList",this.guideBookingList);
    })
  }

  

  getGuides(){
    this.database.getGuides().then((res)=>{
      res.forEach((element:any)=>{
        this.guides.push({
          ...element.data(),
          id:element.id
        })
      })
    })
  }






}
