import { DriverInfoComponent } from './../dialog/driver-info/driver-info.component';
import { ConfirmDeleteComponent } from './../dialog/confirm-delete/confirm-delete.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { AlertsAndNotificationsService } from 'src/app/services/alerts-and-notification/alerts-and-notifications.service';
import { DatabaseService } from 'src/app/services/database/database.service';
import { NewDriverComponent } from './new-driver/new-driver.component';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss'],
})
export class DriverComponent implements OnInit {

  drivers:any[] = []
  constructor(
    private dialog: Dialog,
    private databaseService: DatabaseService,
    private alertify: AlertsAndNotificationsService
    ) {}
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.databaseService.getDrivers().then(res=>{
        this.drivers = res.docs.map(doc=>{return {...doc.data(),id:doc.id}})
      })
    }
  onDelete() {
    this.dialog.open(ConfirmDeleteComponent);
  }
  driverInfo() {
    this.dialog.open(DriverInfoComponent);
  }
  addNewAgent() {
    const dialog = this.dialog.open(NewDriverComponent);
    dialog.closed.subscribe((res) => {
      if (res) {
        this.drivers.push(res);
        this.databaseService
          .addDriver(res)
          .then((res) => {
            console.log(res);
            this.alertify.presentToast('New agent added successfully');
          })
          .catch((err) => {
            this.alertify.presentToast('Error adding new agent');
          });
      }
    });
  }
}
