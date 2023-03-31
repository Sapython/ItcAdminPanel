import { AssignGuideDialogComponent } from './../dialogs/assign-guide-dialog/assign-guide-dialog.component';
import { AssignDriverDialogComponent } from './../dialogs/assign-driver-dialog/assign-driver-dialog.component';
import { Component,AfterViewInit, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DatabaseService } from 'src/app/services/database/database.service';
import { booking } from 'src/structures/booking.structure';

export interface Cards {
  name:string;
  id:string;
  tour:string;
  fee:number;
  expanded:boolean;
}

@Component({
  selector: 'app-allbooking',
  templateUrl: './allbooking.component.html',
  styleUrls: ['./allbooking.component.scss']
})
export class AllbookingComponent implements OnInit  {
  // data: any =
  //   [
  //     {
  //       "parentName": "Parent One",
  //       "childProperties":
  //         [
  //           { "propertyName": "Property One" },
  //           { "propertyName": "Property Two" }
  //         ]
  //     },
  //     {
  //       "parentName": "Parent Two",
  //       "childProperties":
  //         [
  //           { "propertyName": "Property Three" },
  //           { "propertyName": "Property Four" },
  //           { "propertyName": "Property Five" },
  //         ]
  //     },
  //     {
  //       "parentName": "Parent Three",
  //       "childProperties":
  //         [
  //           { "propertyName": "Property Six" },
  //           { "propertyName": "Property Seven" },
  //           { "propertyName": "Property Eight" },
  //         ]
  //     }
  //   ]
  constructor(private databaseService:DatabaseService){}
  toggleAccordian(event:any, index:any) {
    var element = event.target;
    // element.classList.toggle("active");
    // if(this.data[index].isActive) {
    //   this.data[index].isActive = false;
    // } else {
    //   this.data[index].isActive = true;
    // }

    var panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

  }
  // ALLBOOKING : Cards[] =[
  //   {
  //     name:'Rakesh Kumar',
  //     id:'ITC25',
  //     tour:'Tour',
  //     fee:2000,
  //     expanded:false
  //   },
  //   {
  //     name:'Gautam Kumar',
  //     id:'ITC25',
  //     tour:'Tour',
  //     fee:2000,
  //     expanded:false
  //   },
  //   {
  //     name:'Deep Kumar',
  //     id:'ITC25',
  //     tour:'Tour',
  //     fee:2000,
  //     expanded:false
  //   },
  //   {
  //     name:'Abhay Kumar',
  //     id:'ITC25',
  //     tour:'Tour',
  //     fee:2000,
  //     expanded:false
  //   },

  // ]

  // ASSIGNED : Cards[] =[
  //   {
  //     name:'Rakesh Kumar',
  //     id:'ITC25',
  //     tour:'Tour',
  //     fee:2000,
  //     expanded:false
  //   },
  //   {
  //     name:'Gautam Kumar',
  //     id:'ITC25',
  //     tour:'Tour',
  //     fee:2000,
  //     expanded:false
  //   },
  //   {
  //     name:'Deep Kumar',
  //     id:'ITC25',
  //     tour:'Tour',
  //     fee:2000,
  //     expanded:false
  //   },
  //   {
  //     name:'Abhay Kumar',
  //     id:'ITC25',
  //     tour:'Tour',
  //     fee:2000,
  //     expanded:false
  //   },

  // ]
  // COMPLETED : Cards[] =[
  //   {
  //     name:'Rakesh Kumar',
  //     id:'ITC25',
  //     tour:'Tour',
  //     fee:2000,
  //     expanded:false
  //   },
  //   {
  //     name:'Gautam Kumar',
  //     id:'ITC25',
  //     tour:'Tour',
  //     fee:2000,
  //     expanded:false
  //   },
  //   {
  //     name:'Deep Kumar',
  //     id:'ITC25',
  //     tour:'Tour',
  //     fee:2000,
  //     expanded:false
  //   },
  //   {
  //     name:'Abhay Kumar',
  //     id:'ITC25',
  //     tour:'Tour',
  //     fee:2000,
  //     expanded:false
  //   },

  // ]
  // CANCELLED : Cards[] =[
  //   {
  //     name:'Rakesh Kumar',
  //     id:'ITC25',
  //     tour:'Tour',
  //     fee:2000,
  //     expanded:false
  //   },
  //   {
  //     name:'Gautam Kumar',
  //     id:'ITC25',
  //     tour:'Tour',
  //     fee:2000,
  //     expanded:false
  //   },
  //   {
  //     name:'Deep Kumar',
  //     id:'ITC25',
  //     tour:'Tour',
  //     fee:2000,
  //     expanded:false
  //   },
  //   {
  //     name:'Abhay Kumar',
  //     id:'ITC25',
  //     tour:'Tour',
  //     fee:2000,
  //     expanded:false
  //   },

  // ]
  allBookings:extendedBooking[] =[];
  newBookings:extendedBooking[] =[];
  cancelledBookings:extendedBooking[] =[];
  completedBookings:extendedBooking[] =[];
  assignedBookings:extendedBooking[] =[];
  drop(event: CdkDragDrop<extendedBooking[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  ngOnInit(): void {
    this.databaseService.getBookings().subscribe((data:any)=>{
      console.log(data);
      this.allBookings = data.map((item:booking)=>{return {...item, expanded:false}});
      this.newBookings = data.filter((item:booking)=>item.status == 'pending');
      this.cancelledBookings = data.filter((item:booking)=>item.status == 'rejected');
      this.completedBookings = data.filter((item:booking)=>item.status == 'completed');
      this.assignedBookings = data.filter((item:booking)=>item.status == 'assigned');
    })
  }
}
interface extendedBooking extends booking{
  expanded:boolean;
  id:string;
}