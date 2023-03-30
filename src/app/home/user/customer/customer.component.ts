import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { AlertsAndNotificationsService } from 'src/app/services/alerts-and-notification/alerts-and-notifications.service';
import { DatabaseService } from 'src/app/services/database/database.service';
import { ConfirmDeleteComponent } from '../dialog/confirm-delete/confirm-delete.component';
import { DriverInfoComponent } from '../dialog/driver-info/driver-info.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customers:any[] = []

  constructor(
    private dialog: Dialog,
    private databaseService: DatabaseService,
    private alertify: AlertsAndNotificationsService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.databaseService.getCustomers().then(res=>{
      this.customers = res.docs.map(doc=>{return {...doc.data(),id:doc.id}})
    })
  }

  onDelete(){
    this.dialog.open(ConfirmDeleteComponent)
  }
  driverInfo(){
  this.dialog.open(DriverInfoComponent)
  }

  // addNewAgent() {
  //   const dialog = this.dialog.open(NewCustomerComponent);
  //   dialog.closed.subscribe((res) => {
  //     if (res) {
  //       this.drivers.push(res);
  //       this.databaseService
  //         .addDriver(res)
  //         .then((res) => {
  //           console.log(res);
  //           this.alertify.presentToast('New agent added successfully');
  //         })
  //         .catch((err) => {
  //           this.alertify.presentToast('Error adding new agent');
  //         });
  //     }
  //   });
  // }
}
