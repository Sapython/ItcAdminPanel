import { AssignGuideDialogComponent } from './../dialogs/assign-guide-dialog/assign-guide-dialog.component';
import { AssignDriverDialogComponent } from './../dialogs/assign-driver-dialog/assign-driver-dialog.component';
import { Component,AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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
}
