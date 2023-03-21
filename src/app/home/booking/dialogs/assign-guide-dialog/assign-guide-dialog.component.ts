import { ConfirmDeleteComponent } from './../../../dashboard/dialogs/confirm-delete/confirm-delete.component';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { ConfirmGreenComponent } from 'src/app/home/dashboard/dialogs/confirm-green/confirm-green.component';

@Component({
  selector: 'app-assign-guide-dialog',
  templateUrl: './assign-guide-dialog.component.html',
  styleUrls: ['./assign-guide-dialog.component.scss']
})
export class AssignGuideDialogComponent {
  constructor(private dialog:MatDialog){}
  onAssign(){
this.dialog.open(ConfirmGreenComponent)
  }
  onCancel(){
    this.dialog.open(ConfirmDeleteComponent)
  }
}
