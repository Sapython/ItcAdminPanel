
import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database/database.service';

export interface SettelementData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-settlement',
  templateUrl: './settlement.component.html',
  styleUrls: ['./settlement.component.scss'],
})
export class SettlementComponent {
  constructor(
    private fsData: DatabaseService,
    public dialogRef: MatDialogRef<SettlementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SettelementData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  // Form
  settlementForm = new FormGroup({
    amount: new FormControl(''),
  });
  settlementUser() {
    console.log(this.settlementForm.value);
    this.fsData.addLedgerCredit(this.settlementForm.value);
  }
}
