import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataProvider } from 'src/app/providers/data.provider';
import { AlertsAndNotificationsService } from 'src/app/services/alerts-and-notification/alerts-and-notifications.service';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-new-guide',
  templateUrl: './new-guide.component.html',
  styleUrls: ['./new-guide.component.scss']
})
export class NewGuideComponent {
  constructor(
    private databaseService: DatabaseService,
    private alertify: AlertsAndNotificationsService,
    private dataProvider:DataProvider,
    private dialogRef:DialogRef
    ) {}
  imageFile:File|undefined;
  newAgentForm: FormGroup = new FormGroup({
    image:new FormControl(),
    name:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required),
    preferredLocationForWork:new FormControl(),
    email:new FormControl('',Validators.required),
    languages:new FormControl('',Validators.required),
    workExperience:new FormControl(),
    dateOfBirth:new FormControl(),
    education:new FormControl(),
    tourGuideLicenseNumber:new FormControl(),
    tourGuideSkills:new FormControl(),
  })

  async setImage(event:any){
    let files = event.target.files;
    if (files.length > 0){
      this.imageFile = files[0];
      if(this.imageFile){
        try{
          this.dataProvider.pageSetting.blur = true;
          let res = await this.databaseService.upload('tourAgents/'+this.imageFile.name,this.imageFile)
          this.newAgentForm.patchValue({image:res})
          this.alertify.presentToast('Image uploaded successfully')
          this.dataProvider.pageSetting.blur = false;
        } catch (e) {
          console.log(e);
          this.newAgentForm.patchValue({image:null})
          this.alertify.presentToast('Error uploading image')
          this.dataProvider.pageSetting.blur = false;
        }
      } else {
        this.imageFile = undefined;
        this.newAgentForm.patchValue({image:null})
      }
    }
  }

  cancel(){
    this.dialogRef.close()
  }

  submit(){
    if (this.newAgentForm.valid){
      this.dialogRef.close(this.newAgentForm.value)
    } else {
      this.alertify.presentToast('Please fill all the required fields')
    }
  }

}
// this.newAgentForm to interface

