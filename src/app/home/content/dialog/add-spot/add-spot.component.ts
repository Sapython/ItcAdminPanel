import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { Data } from '@angular/router';
import { DataProvider } from 'src/app/providers/data.provider';
import { AlertsAndNotificationsService } from 'src/app/services/alerts-and-notification/alerts-and-notifications.service';
import { DatabaseService } from 'src/app/services/database/database.service';
import { MapLocation } from 'src/structures/service.structure';

@Component({
  selector: 'app-add-spot',
  templateUrl: './add-spot.component.html',
  styleUrls: ['./add-spot.component.scss'],
})
export class AddSpotComponent implements OnInit {
  locations: MapLocation[] = [];
  images: { url: SafeUrl; file: File }[] = [];
  constructor(private databaseService: DatabaseService,private sanitizer: DomSanitizer,private dataProvider:DataProvider,private alertify:AlertsAndNotificationsService,private dialogRef:DialogRef) {}
  imagesSelected(event: any) {
    console.log(event);
    let files = event.target.files;
    // check if the file is an image if yes then add it to images array
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.startsWith('image')) {
        this.images.push({
          url: this.sanitizer.bypassSecurityTrustUrl(
            URL.createObjectURL(files[i])
          ),
          file: files[i],
        });
      }
    }
  }

  spotForm:FormGroup = new FormGroup({
    name: new FormControl('',Validators.required),
    location: new FormControl('',Validators.required),
    category: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    connectedTours: new FormControl(''),
    connectedGuides: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl(''),
    images: new FormControl(''),
    enabled: new FormControl(''),
  })
  ngOnInit(): void { 
    this.databaseService.getLocations().then((data) => {
      this.locations = data.docs.map((doc) => {
        return { ...doc.data(), id: doc.id } as MapLocation;
      });
    });
  }

  cancel(){
    this.dialogRef.close();
  }

  submit(){
    console.log(this.spotForm.value);
    if (this.spotForm.valid && confirm('Are you sure you want to submit?')) {
      // let uploadedImages = []
      let uploadedImages = this.images.map(async (image) => {
        return await this.databaseService.upload(
          'tours/' + this.spotForm.value.name + '/' + image.file.name,
          image.file
        );
      });
      this.dataProvider.pageSetting.blur = true;
      Promise.all(uploadedImages).then((data) => {
        let tourData: any = {
          ...this.spotForm.value,
          latitude: parseFloat(this.spotForm.value.latitude),
          longitude: parseFloat(this.spotForm.value.longitude),
          connectedTours:[],
          connectedGuides:[],
          images: data,
          enabled: true,
        };
        console.log("tourData",tourData);
        this.databaseService.addSpot(tourData).then((data) => {
          this.alertify.presentToast('Spot added successfully');
          // reset values
          this.spotForm.reset();
          this.images = [];
          this.dialogRef.close();
        }).catch((err)=>{
          this.alertify.presentToast('Error adding spot');
        }).finally(()=>{
          this.dataProvider.pageSetting.blur = false;
        });
      }).catch((err)=>{
        this.dataProvider.pageSetting.blur = false;
      });
    }
  }
}
