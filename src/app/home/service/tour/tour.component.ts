import { DatabaseService } from 'src/app/services/database/database.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataProvider } from 'src/app/providers/data.provider';
import { AlertsAndNotificationsService } from 'src/app/services/alerts-and-notification/alerts-and-notifications.service';
import { VehicleCommissionPackages } from 'src/structures/service.structure';
import { home } from '../../model/home.model';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss'],
})
export class TourComponent {
  home = new home();
  list: any[] = [];
  isChecked: boolean = true;
  tours: any[] = [];
  saveCommission: boolean = false;
  commissions: VehicleCommissionPackages[] = [];
  constructor(
    private dialog: MatDialog,
    public databaseService: DatabaseService,
    private dataProvider: DataProvider,
    private alertify: AlertsAndNotificationsService
  ) {}
  ngOnInit() {
    this.list.push(this.home);
    this.databaseService.getTours().then((res) => {
      console.log(res);
      this.tours = res.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
    });
    this.databaseService.getTour().then((res) => {
      console.log(res);
      if (res.exists()){
        this.commissions = res.data()['commissionPackages'];
      }
    })
  }
  addVehicleCommissionPackage() {
    this.saveCommission = true;
    this.commissions.push({
      enabled: true,
      maximumHour: 0,
      minimumHours: 0,
      vehicleCategory: '',
      type: 'fixed',
      value: 0,
    });
  }

  deleteCommissionPackage(index: number) {
    this.saveCommission = true;
    this.commissions.splice(index, 1);
  }

  saveCommissionPackages() {
    this.dataProvider.pageSetting.blur = true;
    this.databaseService
      .saveCommissionPackages('tours', this.commissions)
      .then((res) => {
        this.alertify.presentToast(
          'Tour pricing packages saved successfully'
        );
        this.saveCommission = false;
      })
      .catch((e) => {
        this.alertify.presentToast('Error saving tour pricing packages');
      })
      .finally(() => {
        this.dataProvider.pageSetting.blur = false;
      });
  }
}
