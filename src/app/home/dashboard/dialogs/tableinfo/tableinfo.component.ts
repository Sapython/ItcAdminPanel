import { RecentbookingassignguideComponent } from './../recentbookingassignguide/recentbookingassignguide.component';
import { AssignGuideDialogComponent } from './../../../booking/dialogs/assign-guide-dialog/assign-guide-dialog.component';
import { ConfirmDeleteComponent } from './../confirm-delete/confirm-delete.component';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tableinfo',
  templateUrl: './tableinfo.component.html',
  styleUrls: ['./tableinfo.component.scss']
})
export class TableinfoComponent {
constructor(private dialog:MatDialog){}
onDelete(){
  this.dialog.open(ConfirmDeleteComponent)
}
onAccept(){
  this.dialog.open(RecentbookingassignguideComponent)
}
}
