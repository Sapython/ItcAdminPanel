import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GuideRentalPackage } from 'src/structures/service.structure';

@Component({
  selector: 'app-new-package',
  templateUrl: './new-package.component.html',
  styleUrls: ['./new-package.component.scss']
})
export class NewGuidePackageComponent implements OnInit {
  constructor(private dialogRef:DialogRef,@Inject(DIALOG_DATA) private dialogData:{mode:'edit'|'add',value:GuideRentalPackage}){}
  newPackageForm:FormGroup = new FormGroup({
    days:new FormControl(0,Validators.required),
    price:new FormControl(0,Validators.required),
  })
  ngOnInit(): void {
      if (this.dialogData.mode){
        this.newPackageForm.patchValue(this.dialogData.value)
      }
  }
  cancel(){
    this.dialogRef.close()
  }
  
  submit(){
    this.dialogRef.close(this.newPackageForm.value)
  }
}
