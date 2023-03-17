import { Component } from '@angular/core';
import { DriverInfoComponent } from './../dialog/driver-info/driver-info.component';
import { ConfirmDeleteComponent } from './../dialog/confirm-delete/confirm-delete.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent {
  constructor(private dialog:MatDialog){}
  onDelete(){
    this.dialog.open(ConfirmDeleteComponent)
  }
  driverInfo(){
  this.dialog.open(DriverInfoComponent)
  }
}
