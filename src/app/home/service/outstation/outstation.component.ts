import { AddVehicleCategoryComponent } from './../dialog/add-vehicle-category/add-vehicle-category.component';
import { DeleteWarnComponent } from './../dialog/delete-warn/delete-warn.component';
import { EditVehicleCategoryComponent } from './../dialog/edit-vehicle-category/edit-vehicle-category.component';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-outstation',
  templateUrl: './outstation.component.html',
  styleUrls: ['./outstation.component.scss']
})
export class OutstationComponent {
  isChecked = true;
  constructor(private dialog:MatDialog){}
  onEdit(){
    this.dialog.open(EditVehicleCategoryComponent)
  }
  onDelete(){
    this.dialog.open(DeleteWarnComponent)
  }
  addCategory(){
    this.dialog.open(AddVehicleCategoryComponent)
  }
}
