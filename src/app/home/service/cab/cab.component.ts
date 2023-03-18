import { EditVehicleCategoryComponent } from './../dialog/edit-vehicle-category/edit-vehicle-category.component';
import { DeleteWarnComponent } from './../dialog/delete-warn/delete-warn.component';
import { AddVehicleCategoryComponent } from './../dialog/add-vehicle-category/add-vehicle-category.component';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cab',
  templateUrl: './cab.component.html',
  styleUrls: ['./cab.component.scss']
})
export class CabComponent {
  isChecked = true;
  constructor(private dialog:MatDialog){}
  addVehicleCategory(){
    this.dialog.open(AddVehicleCategoryComponent)
  }
  onDelete(){
    this.dialog.open(DeleteWarnComponent)
  }
  editVehicle(){
    this.dialog.open(EditVehicleCategoryComponent)
  }
}
