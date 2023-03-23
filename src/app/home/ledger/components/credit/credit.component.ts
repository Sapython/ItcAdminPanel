
import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormGroup,FormControl } from '@angular/forms';
import { DatabaseService } from 'services/database/database.service';

export interface CreditData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent {
  constructor(
    private fsData: DatabaseService,
    public dialogRef: MatDialogRef<CreditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreditData,
    ) {}
    data1: any = {};
  ngOnInit() {
    // getDoc(doc(this.firestore,'data/Pn5oHxAjpnSEAPJABj22')).then((data)=>{
    //   this.data1 = data.data();
    // })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  // Form
  creditForm= new FormGroup({
      amount:new FormControl(''),
      sender:new FormControl(''),
      reason:new FormControl(''),
  });
  creditUser(){
    console.log(this.creditForm.value);
    this.fsData.addLedgerCredit(this.creditForm.value);
  }
}


