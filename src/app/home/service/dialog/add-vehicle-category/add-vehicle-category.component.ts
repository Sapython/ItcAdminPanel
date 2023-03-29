import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DataProvider } from 'src/app/providers/data.provider';
import { AlertsAndNotificationsService } from 'src/app/services/alerts-and-notification/alerts-and-notifications.service';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-add-vehicle-category',
  templateUrl: './add-vehicle-category.component.html',
  styleUrls: ['./add-vehicle-category.component.scss'],
})
export class AddVehicleCategoryComponent {
  form: FormGroup = new FormGroup({
    image: new FormControl(null,Validators.required),
    vehicleCategory: new FormControl(null,Validators.required),
    description: new FormControl(null,Validators.required),
    seats: new FormControl(null,Validators.required),
    capacity: new FormControl(null,Validators.required),
    acNonac: new FormControl(null,Validators.required),
    fullPrice: new FormControl(null,Validators.required),
    pricePerHour: new FormControl(null,Validators.required),
  });
  imageFile:File|undefined;

  constructor(private dialogRef:DialogRef,@Inject(DIALOG_DATA) private dialogData:{mode:'add',type:'rental'},private databaseSerivce:DatabaseService,private dataProvider:DataProvider,private alertify:AlertsAndNotificationsService) {}
  async setImage(event:any){
    let files = event.target.files;
    if (files.length > 0){
      this.imageFile = files[0];
      if(this.imageFile){
        try{
          this.dataProvider.pageSetting.blur = true;
          let res = await this.databaseSerivce.upload('vehicleCategories/'+this.dialogData.type+'/'+this.imageFile.name,this.imageFile)
          this.form.patchValue({image:res})
          this.alertify.presentToast('Image uploaded successfully')
          this.dataProvider.pageSetting.blur = false;
        } catch (e) {
          console.log(e);
          this.form.patchValue({image:null})
          this.alertify.presentToast('Error uploading image')
          this.dataProvider.pageSetting.blur = false;
        }
      } else {
        this.imageFile = undefined;
        this.form.patchValue({image:null})
      }
    }
  }
  ngOnInit(): void {
  }
  onCancel() {
    this.dialogRef.close()
  }
  onSubmit() {
    if (this.form.valid){
      this.dialogRef.close({...this.form.value,enabled:true});
    } else {
      this.alertify.presentToast('Please fill all the fields')
    }
  }
}
