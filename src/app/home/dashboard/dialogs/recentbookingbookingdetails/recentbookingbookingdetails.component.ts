import { RecentbookingassignguideComponent } from './../recentbookingassignguide/recentbookingassignguide.component';
import { ConfirmDeleteComponent } from './../confirm-delete/confirm-delete.component';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recentbookingbookingdetails',
  templateUrl: './recentbookingbookingdetails.component.html',
  styleUrls: ['./recentbookingbookingdetails.component.scss']
})
export class RecentbookingbookingdetailsComponent {
  title:string="Booking Details of Rental"
constructor(private dialog:MatDialog){}
onDelete(){
  this.dialog.open(ConfirmDeleteComponent)
}
onReassign(){
  this.dialog.open(RecentbookingassignguideComponent)
}
}
