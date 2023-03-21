import { RecentbookingbookingdetailsComponent } from './../recentbookingbookingdetails/recentbookingbookingdetails.component';
import { ConfirmDeleteComponent } from './../confirm-delete/confirm-delete.component';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recentbookingassignguide',
  templateUrl: './recentbookingassignguide.component.html',
  styleUrls: ['./recentbookingassignguide.component.scss']
})
export class RecentbookingassignguideComponent {
constructor(private dialog:MatDialog){}
onCancel(){
  this.dialog.open(ConfirmDeleteComponent)
}
onAssign(){
  this.dialog.open(RecentbookingbookingdetailsComponent)
}
}
