import { AssignGuideDialogComponent } from './../dialogs/assign-guide-dialog/assign-guide-dialog.component';
import { AssignDriverDialogComponent } from './../dialogs/assign-driver-dialog/assign-driver-dialog.component';
import { Component,AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

export interface Cards {
  name:string;
  id:string;
  tour:string;
  fee:number;
}

@Component({
  selector: 'app-allbooking',
  templateUrl: './allbooking.component.html',
  styleUrls: ['./allbooking.component.scss']
})
export class AllbookingComponent  {
  data: any =
    [
      {
        "parentName": "Parent One",
        "childProperties":
          [
            { "propertyName": "Property One" },
            { "propertyName": "Property Two" }
          ]
      },
      {
        "parentName": "Parent Two",
        "childProperties":
          [
            { "propertyName": "Property Three" },
            { "propertyName": "Property Four" },
            { "propertyName": "Property Five" },
          ]
      },
      {
        "parentName": "Parent Three",
        "childProperties":
          [
            { "propertyName": "Property Six" },
            { "propertyName": "Property Seven" },
            { "propertyName": "Property Eight" },
          ]
      }
    ]
  constructor(private dialog:MatDialog){}
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
   ALLBOOKING : Cards[] =[
    {
      name:'Rakesh Kumar',
      id:'ITC25',
      tour:'Tour',
      fee:2000
    },
    {
      name:'Gautam Kumar',
      id:'ITC25',
      tour:'Tour',
      fee:2000
    },
    {
      name:'Deep Kumar',
      id:'ITC25',
      tour:'Tour',
      fee:2000
    },
    {
      name:'Abhay Kumar',
      id:'ITC25',
      tour:'Tour',
      fee:2000
    },

  ]

  ASSIGNED : Cards[] =[
    {
      name:'Rakesh Kumar',
      id:'ITC25',
      tour:'Tour',
      fee:2000
    },
    {
      name:'Gautam Kumar',
      id:'ITC25',
      tour:'Tour',
      fee:2000
    },
    {
      name:'Deep Kumar',
      id:'ITC25',
      tour:'Tour',
      fee:2000
    },
    {
      name:'Abhay Kumar',
      id:'ITC25',
      tour:'Tour',
      fee:2000
    },

  ]
  COMPLETED : Cards[] =[
    {
      name:'Rakesh Kumar',
      id:'ITC25',
      tour:'Tour',
      fee:2000
    },
    {
      name:'Gautam Kumar',
      id:'ITC25',
      tour:'Tour',
      fee:2000
    },
    {
      name:'Deep Kumar',
      id:'ITC25',
      tour:'Tour',
      fee:2000
    },
    {
      name:'Abhay Kumar',
      id:'ITC25',
      tour:'Tour',
      fee:2000
    },

  ]
  drop(event: CdkDragDrop<Cards[]>) {
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
}
