import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-package',
  templateUrl: './new-package.component.html',
  styleUrls: ['./new-package.component.scss']
})
export class NewPackageComponent {
  constructor(private dialogRef:DialogRef){}
  newPackageForm:FormGroup = new FormGroup({
    hours:new FormControl(0,Validators.required),
    distance:new FormControl(0,Validators.required),
  })
  cancel(){
    this.dialogRef.close()
  }
  
  submit(){
    this.dialogRef.close(this.newPackageForm.value)
  }
}
