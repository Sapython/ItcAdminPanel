import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { ConfirmDeleteComponent } from 'src/app/home/dashboard/dialogs/confirm-delete/confirm-delete.component';
import { RecentbookingassignguideComponent } from 'src/app/home/dashboard/dialogs/recentbookingassignguide/recentbookingassignguide.component';

@Component({
  selector: 'app-outstaion-complete-info',
  templateUrl: './outstaion-complete-info.component.html',
  styleUrls: ['./outstaion-complete-info.component.scss']
})
export class OutstaionCompleteInfoComponent {
  constructor(private dialog:MatDialog){}
  onDelete(){
    this.dialog.open(ConfirmDeleteComponent)
  }
  onReassign(){
    this.dialog.open(RecentbookingassignguideComponent)
  }
}
