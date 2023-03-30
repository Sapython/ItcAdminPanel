import { AddnewcommissionComponent } from './../../dashboard/dialogs/addnewcommission/addnewcommission.component';
import { AddnewpackageComponent } from './../../dashboard/dialogs/addnewpackage/addnewpackage.component';
import { AddVehicleCategoryComponent } from '../../../../components/add-vehicle-category/add-vehicle-category.component';
import { DeleteWarnComponent } from './../dialog/delete-warn/delete-warn.component';
import { EditVehicleCategoryComponent } from './../dialog/edit-vehicle-category/edit-vehicle-category.component';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { DataProvider } from 'src/app/providers/data.provider';
import { DatabaseService } from 'src/app/services/database/database.service';
import { AlertsAndNotificationsService } from 'src/app/services/alerts-and-notification/alerts-and-notifications.service';
import { AddNewAreaComponent } from 'src/components/add-new-area/add-new-area.component';

@Component({
  selector: 'app-outstation',
  templateUrl: './outstation.component.html',
  styleUrls: ['./outstation.component.scss']
})
export class OutstationComponent {
  public url: any;
  public file: any;
  isChecked = true;
  vehicles: any[] = []
  areas: {
    title: string;
    nearBy: string;
    id?: string;
    mode: string;
    active: boolean;
  }[] = []

  constructor(private dialog: Dialog, private dataProvider: DataProvider, private databaseService: DatabaseService, private alertify: AlertsAndNotificationsService) { }

  ngOnInit() {
    this.getAreas()
    this.getVehicle()
  }
  // addVehicleCategory() {
  //   this.dialog.open(AddVehicleCategoryComponent)
  // }
  onDelete() {
    this.dialog.open(DeleteWarnComponent)
  }
  editVehicle() {
    this.dialog.open(EditVehicleCategoryComponent)
  }
  addPackage() {
    this.dialog.open(AddnewpackageComponent)
  }
  addCommission() {
    this.dialog.open(AddnewcommissionComponent)
  }

  addAreas() {
    const addAreaDialog = this.dialog.open(AddNewAreaComponent, { data: 'Add New Area' })
    addAreaDialog.closed.subscribe((area: any) => {
      const areaData = {
        ...area,
        mode: 'outstation',
        active: true,
      };
      console.log('adad', areaData);

      if (area?.name) {
        this.dataProvider.pageSetting.blur = true
        this.databaseService.addArea(areaData).then(res => {
          this.alertify.presentToast('Area Added Successfully')
        }).catch(err => {
          this.alertify.presentToast('Error Adding Area')
        }).finally(() => {
          this.dataProvider.pageSetting.blur = false;
        })
        this.areas.push({ title: area.name, nearBy: area.nearBy, mode: 'outstation', active: true })
      }
    })
  }

  getAreas() {
    this.databaseService.getAreas().then((res) => {
      res.forEach((area) => {
        this.areas.push({ title: area.data()['name'], nearBy: area.data()['nearBy'], id: area.id, mode: 'outstation', active: true })
      })
      console.log("this.areas", this.areas);

    })
  }

  deleteArea(id: string) {
    this.dataProvider.pageSetting.blur = true
    this.databaseService.deleteArea(id).then(res => {
      this.areas = this.areas.filter(area => area.id !== id)
    }).finally(() => {
      this.dataProvider.pageSetting.blur = false
    })
  }

  // Vehicle
  getVehicle() {
    this.databaseService.getVehicles().then(res => {
      this.vehicles = []
      res.forEach((vehicle) => {
        this.vehicles.push({ ...vehicle.data() as any, id: vehicle.id })
      })
      console.log("vehicle", this.vehicles);
    })
  }


  addVehicleCategory() {
    const addVehicle = this.dialog.open(AddVehicleCategoryComponent, { data: { mode: 'add' } })
    addVehicle.closed.subscribe((vehicle: any) => {

      const vehicleData = {
        ...vehicle,
        mode: 'outstation',
      };
      console.log('adad', vehicleData);

      if (vehicle?.name) {
        this.dataProvider.pageSetting.blur = true
        this.databaseService.addVehiclePackage(vehicleData).then(res => {
          this.alertify.presentToast('Area Added Successfully')
        }).catch(err => {
          this.alertify.presentToast('Error Adding Area')
        }).finally(() => {
          this.dataProvider.pageSetting.blur = false;
        })
        this.vehicles.push({ title: vehicle.name, mode: 'outstation', active: true })
      }
    })
  }

}
