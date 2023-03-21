import { DebitComponent } from './components/debit/debit.component';
import { CreditComponent } from './components/credit/credit.component';
import { Component } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { SettlementComponent } from './components/settlement/settlement.component';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.scss'],
})
export class LedgerComponent {
  constructor(public dialog: MatDialog) {}

  panelOpenState: boolean = true;
  price = '2200';
  temp: any;
  openDialogCredit(): void {
    const dialogRef = this.dialog.open(CreditComponent, {});
    dialogRef.afterClosed().subscribe((result: any) => {
      // console.log('The dialog was closed');
    });
  }
  openDialogDebit(): void {
    const dialogRef = this.dialog.open(DebitComponent, {});
    dialogRef.afterClosed().subscribe((result: any) => {
      // console.log('The dialog was closed');
    });
  }
  openDialogSettlement(): void {
    const dialogRef = this.dialog.open(SettlementComponent, {});
    dialogRef.afterClosed().subscribe((result: any) => {
      // console.log('The dialog was closed');
    });
  }
}
