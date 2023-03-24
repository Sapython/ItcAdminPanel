import { AddnewcommissionComponent } from './../../dashboard/dialogs/addnewcommission/addnewcommission.component';
import { AddnewpackageComponent } from './../../dashboard/dialogs/addnewpackage/addnewpackage.component';
import { EditVehicleCategoryComponent } from './../dialog/edit-vehicle-category/edit-vehicle-category.component';
import { DeleteWarnComponent } from './../dialog/delete-warn/delete-warn.component';
import { AddVehicleCategoryComponent } from './../dialog/add-vehicle-category/add-vehicle-category.component';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { AddNewAreaComponent } from 'src/components/add-new-area/add-new-area.component';
import { DataProvider } from 'src/app/providers/data.provider';
import { DatabaseService } from 'services/database/database.service';
import { AlertsAndNotificationsService } from 'services/alerts-and-notification/alerts-and-notifications.service';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-cab',
  templateUrl: './cab.component.html',
  styleUrls: ['./cab.component.scss']
})
export class CabComponent {
  isChecked = true;
  areas: { title: string; id?: string }[] = []
  
  constructor(private dialog:Dialog, private dataProvider:DataProvider, private databaseService:DatabaseService, private alertify:AlertsAndNotificationsService){}

  addVehicleCategory(){
    this.dialog.open(AddVehicleCategoryComponent)
  }
  onDelete(){
    this.dialog.open(DeleteWarnComponent)
  }
  editVehicle(){
    this.dialog.open(EditVehicleCategoryComponent)
  }
  addPackage(){
    this.dialog.open(AddnewpackageComponent)
  }
  addCommission(){
    this.dialog.open(AddnewcommissionComponent)
  }

  addAreas() {
    const addAreaDialog = this.dialog.open(AddNewAreaComponent, { data: 'Add New Area' })
    addAreaDialog.closed.subscribe((area: any) => {
      console.log(area);
      if (area?.name) {
        this.dataProvider.pageSetting.blur = true
        this.databaseService.addArea(area).then(res => {
          this.alertify.presentToast('Area Added Successfully')
        }).catch(err => {
          this.alertify.presentToast('Error Adding Area')
        }).finally(() => {
          this.dataProvider.pageSetting.blur = false;
        })
        this.areas.push({ title: area.name })
      }
    })
  }
}
