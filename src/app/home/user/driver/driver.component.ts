import { DriverInfoComponent } from './../dialog/driver-info/driver-info.component';
import { ConfirmDeleteComponent } from './../dialog/confirm-delete/confirm-delete.component';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent {
constructor(private dialog:MatDialog){}
onDelete(){
  this.dialog.open(ConfirmDeleteComponent)
}
driverInfo(){
this.dialog.open(DriverInfoComponent)
}
}
