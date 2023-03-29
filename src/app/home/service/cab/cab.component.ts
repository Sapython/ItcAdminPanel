import { AddnewcommissionComponent } from './../../dashboard/dialogs/addnewcommission/addnewcommission.component';
import { AddnewpackageComponent } from './../../dashboard/dialogs/addnewpackage/addnewpackage.component';
import { EditVehicleCategoryComponent } from './../dialog/edit-vehicle-category/edit-vehicle-category.component';
import { DeleteWarnComponent } from './../dialog/delete-warn/delete-warn.component';
import { AddVehicleCategoryComponent } from './../dialog/add-vehicle-category/add-vehicle-category.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { MapLocation, RentalPackage, VehicleCategory, VehicleCommissionPackages, VehiclePricingPackages } from 'src/structures/service.structure';
import { Dialog } from '@angular/cdk/dialog';
import { DataProvider } from 'src/app/providers/data.provider';
import { AlertsAndNotificationsService } from 'src/app/services/alerts-and-notification/alerts-and-notifications.service';
import { DatabaseService } from 'src/app/services/database/database.service';
import { AddlocationComponent } from '../addlocation/addlocation.component';
import { NewPackageComponent } from '../rental/new-package/new-package.component';

@Component({
  selector: 'app-cab',
  templateUrl: './cab.component.html',
  styleUrls: ['./cab.component.scss']
})
export class CabComponent implements OnInit {
  isChecked:boolean=true;
  packages:RentalPackage[]=[]
  locations:MapLocation[] = []
  vehiclePackages:VehicleCategory[] = []
  vehiclePricingPackages:VehiclePricingPackages[] = []
  commissions:VehicleCommissionPackages[] = []
  saveCommission:boolean = false;
  savePackages:boolean = false;
  constructor(private dialog:Dialog,private databaseService:DatabaseService,private alertify:AlertsAndNotificationsService,private dataProvider:DataProvider){  }
  ngOnInit(): void {
    this.databaseService.getRentalServicePackages().then((res)=>{
      this.packages = res.docs.map((doc)=>{return {...doc.data(),id:doc.id} as RentalPackage})
    })
    this.getLocations();
    this.getVehicles();
    this.databaseService.getCabService().then((res)=>{
      if (res.exists()){
        this.commissions = res.data()['commissionPackages']
        this.vehiclePricingPackages = res.data()['packages']
      }
    })
  }

  getVehicles(){
    this.databaseService.getVehicleCategories('cab').then((res)=>{
      this.vehiclePackages = res.docs.map((doc)=>{return {...doc.data(),id:doc.id} as VehicleCategory})
      console.log("this.vehiclePackages",this.vehiclePackages);
    })
  }

  getLocations(){
    this.databaseService.getLocations().then((res)=>{
      this.locations = res.docs.map((doc)=>{return {...doc.data(),id:doc.id} as MapLocation})
    })
  }

  editPackage(){
    const dialog = this.dialog.open(NewPackageComponent,{data:{mode:'edit'}})
  }

  newPackage(){
    const dialog = this.dialog.open(NewPackageComponent,{data:{mode:'add'}})
    dialog.closed.subscribe((data:any)=>{
      if (data){
        if (!(data.distance && data.hours)){
          alert('Please enter all the fields')
          return;
        }
        let rentalPackage:RentalPackage = {
          distance:data.distance,
          hours:data.hours,
          enabled:true
        }
        this.databaseService.addRentalServicePackage(rentalPackage).then((res)=>{
          this.alertify.presentToast('Package added successfully')
        }).catch((e)=>{
          this.alertify.presentToast('Error adding package')
        })
      }
    })
  }

  addLocation(){
    const dialog = this.dialog.open(AddlocationComponent,{data:{mode:'add'}})
    dialog.closed.subscribe((data:any)=>{
      console.log(data);
      if(data){
        if (data.name && data.lat && data.lng){
          this.databaseService.addLocation(data).then((res)=>{
            this.alertify.presentToast('Location added successfully');
            this.getLocations();
          }).catch((e)=>{
            this.alertify.presentToast('Error adding location')
          })
        } else {
          this.alertify.presentToast('Please enter all the fields')
        }
      }
    })
  }

  editLocation(location:MapLocation){
    const dialog = this.dialog.open(AddlocationComponent,{data:{mode:'edit',value:location}})
    dialog.closed.subscribe((data:any)=>{
      console.log(data);
      if(data){
        if (data.name && data.lat && data.lng){
          this.databaseService.updateLocation(data).then((res)=>{
            this.alertify.presentToast('Location added successfully')
            this.getLocations();
          }).catch((e)=>{
            this.alertify.presentToast('Error adding location')
          })
        } else {
          this.alertify.presentToast('Please enter all the fields')
        }
      }
    })
  }

  deleteLocation(location:MapLocation){
    if (confirm('Are you sure you want to delete this location?')){
      this.databaseService.deleteLocation(location).then((res)=>{
        this.alertify.presentToast('Location deleted successfully');
        this.getLocations();
      }).catch((e)=>{
        this.alertify.presentToast('Error deleting location');
      })
    }
  }

  addVehicleCategory(){
    const dialog = this.dialog.open(AddVehicleCategoryComponent,{data:{mode:'add',type:'cab'}})
    dialog.closed.subscribe((data:any)=>{
      if (data){
        if (data.image && data.description){
          this.dataProvider.pageSetting.blur = true;
          let vehicleData:VehicleCategory = {
            ...data
          }
          if (vehicleData.image){
            this.databaseService.addVehicleCategory('cab',data).then((res)=>{
              this.alertify.presentToast('Vehicle category added successfully')
              this.getVehicles();
            }).catch((e)=>{
              this.alertify.presentToast('Error adding vehicle category')
            }).finally(()=>{
              this.dataProvider.pageSetting.blur = false;
            })
          }
        } else {
          this.alertify.presentToast('Please enter all the fields')
        }
      }
    })
  }

  editVehicle(vehiclePackage:VehicleCategory){
    const dialog = this.dialog.open(EditVehicleCategoryComponent,{data:{mode:'add',type:'cab',value:vehiclePackage}})
    dialog.closed.subscribe((data:any)=>{
      if (data){
        if (data.image && data.description){
          this.dataProvider.pageSetting.blur = true;
          let vehicleData:VehicleCategory = {
            ...data
          }
          if (vehicleData.image){
            this.databaseService.updateVehicleCategory('cab',data).then((res)=>{
              this.alertify.presentToast('Vehicle category updated successfully')
            }).catch((e)=>{
              this.alertify.presentToast('Error updating vehicle category')
            }).finally(()=>{
              this.dataProvider.pageSetting.blur = false;
            })
          }
        } else {
          this.alertify.presentToast('Please enter all the fields')
        }
      }
    })
  }

  deleteVehicle(vehiclePackage:VehicleCategory){
    this.databaseService.deleteVehicleCategory('cab',vehiclePackage).then((res)=>{
      this.alertify.presentToast('Vehicle category deleted successfully')
    }).catch((e)=>{
      this.alertify.presentToast('Error deleting vehicle category')
    })
  }

  addVehiclePricingPackage(vehicleCategory:VehicleCategory){
    this.savePackages = true;
    this.vehiclePricingPackages.push({
      enabled:true,
      maximumHour:0,
      minimumHours:0,
      pricePerHour:0,
      vehicleCategory:vehicleCategory.id!
    })
  }
  
  deleteVehiclePackage(index:number){
    this.savePackages = true;
    this.vehiclePricingPackages.splice(index,1)
  }

  saveVehiclePackages(){
    this.dataProvider.pageSetting.blur = true;
    this.databaseService.saveVehiclePricingPackages('cab',this.vehiclePricingPackages).then((res)=>{
      this.alertify.presentToast('Vehicle pricing packages saved successfully')
      this.savePackages = false;
    }).catch((e)=>{
      this.alertify.presentToast('Error saving vehicle pricing packages')
    }).finally(()=>{
      this.dataProvider.pageSetting.blur = false;
    })
  }

  addVehicleCommissionPackage(vehicleCategory:VehicleCategory){
    this.saveCommission = true;
    this.commissions.push({
      enabled:true,
      maximumHour:0,
      minimumHours:0,
      vehicleCategory:vehicleCategory.id!,
      type:'fixed',
      value:0
    }) 
  }

  deleteCommissionPackage(index:number){
    this.saveCommission = true;
    this.commissions.splice(index,1)
  }

  saveCommissionPackages(){
    this.dataProvider.pageSetting.blur = true;
    this.databaseService.saveCommissionPackages('cab',this.commissions).then((res)=>{
      this.alertify.presentToast('Vehicle pricing packages saved successfully')
      this.saveCommission = false;
    }).catch((e)=>{
      this.alertify.presentToast('Error saving vehicle pricing packages')
    }).finally(()=>{
      this.dataProvider.pageSetting.blur = false;
    })
  }
}
