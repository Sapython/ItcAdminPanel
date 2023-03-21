import { ConfirmDeleteComponent } from './../confirm-delete/confirm-delete.component';
import { AssignGuideDialogComponent } from './../../../booking/dialogs/assign-guide-dialog/assign-guide-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-riderenataltableinfo',
  templateUrl: './riderenataltableinfo.component.html',
  styleUrls: ['./riderenataltableinfo.component.scss']
})
export class RiderenataltableinfoComponent {
  constructor(private dialog:MatDialog){}


  accecpt(){
      this.dialog.open(AssignGuideDialogComponent)
  }
  onCancel(){
    this.dialog.open(ConfirmDeleteComponent)
  }
}
