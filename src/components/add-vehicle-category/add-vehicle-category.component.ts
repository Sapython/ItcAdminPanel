import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlertsAndNotificationsService } from 'src/app/services/alerts-and-notification/alerts-and-notifications.service';
import { DatabaseService } from 'src/app/services/database/database.service';
import { DataProvider } from 'src/app/providers/data.provider';
import { AddNewBannerComponent } from 'src/components/add-new-banner/add-new-banner.component';

@Component({
  selector: 'app-add-vehicle-category',
  templateUrl: './add-vehicle-category.component.html',
  styleUrls: ['./add-vehicle-category.component.scss']
})
export class AddVehicleCategoryComponent {
  ac: string[] = ['AC', 'Non AC']
  types: string[] = ['App', 'Url']
  luggageSpaces: string[] = ['10 Ltr', '15 Ltr', '20 Ltr']
  appLinks: AppLink[] = []
  imageSource: string = '';
  imageFile: File | undefined;
  newVehicleCategoryForm = new FormGroup({
    vehicleCategory: new FormControl('', Validators.required),
    bannerUrlType: new FormControl('url', Validators.required),
    bannerUrl: new FormControl(''),
    bannerImage: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    description: new FormControl(''),
    seats: new FormControl('', Validators.required),
    luggageSpace: new FormControl('', Validators.required),
    acNonAc: new FormControl('', Validators.required),
    enabled: new FormControl(true, Validators.required),
  })
  constructor(private databaseService: DatabaseService, private alertify: AlertsAndNotificationsService, private dataProvider: DataProvider, public dialogRef: DialogRef<AddNewBannerComponent>, @Inject(DIALOG_DATA) private data: any) { }
  genCurrentTimeAsValidFileName() {
    return new Date().toISOString().replace(/:/g, '-');
  }
  async submit() {
    if (this.newVehicleCategoryForm.status == 'VALID' && this.imageFile) {
      this.dataProvider.pageSetting.blur = true
      if (this.imageFile) {
        try {
          let imageRes = await this.databaseService.upload('images/' + this.genCurrentTimeAsValidFileName() + '/' + this.imageFile.name, this.imageFile)
          console.log(imageRes);
          this.newVehicleCategoryForm.value.bannerImage = imageRes
        } catch (error) {
          console.log(error);
          this.alertify.presentToast('Error uploading image')
          this.dataProvider.pageSetting.blur = false
          return
        }
      } else {
        this.alertify.presentToast('Please select an image')
        this.dataProvider.pageSetting.blur = false
        return
      }
      if (this.data && this.data.mode == 'add') {
        // handle image upload
        this.databaseService.addVehiclePackage(this.newVehicleCategoryForm.value).then((res: any) => {
          this.alertify.presentToast('Vehicle added successfully')
        }).catch((err: any) => {
          this.alertify.presentToast('Error adding banner')
        }).finally(() => {
          this.newVehicleCategoryForm.reset()
          this.dataProvider.pageSetting.blur = false
        })
      } else if (this.data && this.data.mode == 'edit') {
        this.dataProvider.pageSetting.blur = true
        this.databaseService.updateVehiclePackage(this.data.id, this.newVehicleCategoryForm.value).then((res: any) => {
          this.alertify.presentToast('Vehicle updated successfully')
        }).catch((err: any) => {
          this.alertify.presentToast('Error updating banner')
        }).finally(() => {
          this.newVehicleCategoryForm.reset()
          this.dataProvider.pageSetting.blur = false
        })
      } else {
        this.alertify.presentToast('Error adding Vehicle. Mode not specified')
        this.dataProvider.pageSetting.blur = false
      }
    } else {
      console.log(this.newVehicleCategoryForm.value);
      this.alertify.presentToast('Please fill all required fields')
      this.dataProvider.pageSetting.blur = false
    }
  }

  setImage(event: any) {
    // check if the image is valid and less than 500kb
    if (event.target.files[0].size > 1000000) {
      this.alertify.presentToast('Image size is too large')
      return
    }
    if (event.target.files[0].type != 'image/jpeg' && event.target.files[0].type != 'image/png') {
      this.alertify.presentToast('Invalid image format')
      return
    }
    this.imageFile = event.target.files[0]
    var selectedFile = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageSource = event.target.result;
    };

    reader.readAsDataURL(selectedFile);

  }

  clearImage() {
    this.imageFile = undefined
    this.imageSource = ''
  }
}

interface AppLink {
  title: string,
  url: string
}