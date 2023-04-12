import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database/database.service';
import { DialogRef } from '@angular/cdk/dialog';

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
  debitDetailForm = new FormGroup({
    to: new FormControl('', [Validators.required]),
    narration: new FormControl('', [Validators.required]),
    amount: new FormControl(0, [Validators.required]),
    from: new FormControl('', [Validators.required]),
    transactionId: new FormControl(''),
  });

    constructor(public dialogRef:DialogRef<any>) { }
  
    ngOnInit(): void {
    }
    submitForm() {
      if(this.debitDetailForm.valid) {
        console.log(this.debitDetailForm.value);
      };
      this.dialogRef.close(this.debitDetailForm.value)
    }
}


