import { AssignGuideDialogComponent } from './../dialogs/assign-guide-dialog/assign-guide-dialog.component';
import { AssignDriverDialogComponent } from './../dialogs/assign-driver-dialog/assign-driver-dialog.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-allbooking',
  templateUrl: './allbooking.component.html',
  styleUrls: ['./allbooking.component.scss']
})
export class AllbookingComponent {
  constructor(private dialog:MatDialog){}
  assignDriverandGuide(){
this.dialog.open(AssignDriverDialogComponent)
  }
  assignGuide(){
    this.dialog.open(AssignGuideDialogComponent)
  }
}
