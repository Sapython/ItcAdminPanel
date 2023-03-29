import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertsAndNotificationsService } from 'services/alerts-and-notification/alerts-and-notifications.service';
import { DatabaseService } from 'services/database/database.service';

@Component({
  selector: 'app-add-new-area',
  templateUrl: './add-new-area.component.html',
  styleUrls: ['./add-new-area.component.scss']
})
export class AddNewAreaComponent {
  areaForm:FormGroup = new FormGroup({
    name: new FormControl(''),
    nearBy: new FormControl(''),
    mode: new FormControl('')
  });
  constructor(public dialogRef: DialogRef,@Inject(DIALOG_DATA) public title: string) { }
  submit(){
    this.dialogRef.close(this.areaForm.value);
  }

  
}
