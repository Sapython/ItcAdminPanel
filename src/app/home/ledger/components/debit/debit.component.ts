import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { DatabaseService } from 'src/app/services/database/database.service';

export interface DebitData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.scss'],
})
export class DebitComponent {
  constructor(
    private fsData: DatabaseService,
    public dialogRef: MatDialogRef<DebitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DebitData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  // Form
  debitForm = new FormGroup({
    amount: new FormControl(''),
    sender: new FormControl(''),
    reason: new FormControl(''),
  });
  debitUser() {
    console.log(this.debitForm.value);
    this.fsData.addLedgerDebit(this.debitForm.value);
  }
}
