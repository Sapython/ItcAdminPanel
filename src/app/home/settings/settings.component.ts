import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertsAndNotificationsService } from 'src/app/services/alerts-and-notification/alerts-and-notifications.service';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit{
  taxForm:FormGroup = new FormGroup({
    tax: new FormControl(0,Validators.required)
  })
  taxValue:number = 0;
  constructor(private databaseService:DatabaseService,private alertify:AlertsAndNotificationsService){}
  ngOnInit(): void {
    this.databaseService.getTaxSettings().then((taxSettings)=>{
      if (taxSettings.exists()){
        this.taxForm.setValue({
          tax:taxSettings.data()['tax']
        })
        this.taxValue = taxSettings.data()['tax'];
      }
    })
  }
  saveTaxSettings(){
    this.databaseService.saveTaxSettings(this.taxForm.value).then(()=>{
      this.alertify.presentToast('Tax settings saved successfully')
    }).catch((err)=>{
      this.alertify.presentToast('Error saving tax settings')
    })
  }

  cancel(){
    this.taxForm.reset();
    this.taxForm.setValue({
      tax:this.taxValue
    })
  }
}
