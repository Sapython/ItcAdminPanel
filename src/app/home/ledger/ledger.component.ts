import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { DataProvider } from 'src/app/providers/data.provider';




import { DatabaseService } from 'src/app/services/database/database.service';
import { AlertsAndNotificationsService } from 'src/app/services/alerts-and-notification/alerts-and-notifications.service';
import { CreditComponent } from './credit/credit.component';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.scss'],
})
export class LedgerComponent {
  ledgers: Ledger[] = [];
  todayLedger: Ledger = {
    date: new Date(),
    description: 'Test',
    totalDebit: 0,
    totalCredit: 0,
    creditLedger: [],
    debitLedger: [],
  };
  ledgerDate: string = '';
  displayedColumns: string[] = [
    'transactionId',
    'time',
    'to',
    'narration',
    'amount',
  ];
  dataSource: any[] = [];
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  constructor(
    private databaseService: DatabaseService,
    private dialog: Dialog,
    private dataProvider: DataProvider,
    private alert: AlertsAndNotificationsService
  ) {}
  ngOnInit(): void {
    this.ledgers = []
    let date = new Date();
    this.ledgerDate = [
      date.getDate(),
      date.getMonth() + 1,
      date.getFullYear(),
    ].join('.');
    this.createLedger(this.ledgerDate);

    for (let i = 1; i <= date.getDate(); i++) {
      let ledger = [i, date.getMonth() + 1, date.getFullYear()].join('.');
      this.databaseService.getLedger(ledger).then((res) => {
        if (res) {
          res['date'] = this.convertDate(res['date']);
          this.ledgers.push(res as Ledger);
        }
      });
    }

    console.log(this.ledgers);
  }

  convertDate(date: Timestamp) {
    return new Date(date.seconds * 1000);
  }
  formateDate(date: Date) {
    let months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    return [date.getDate(), months[date.getMonth()], date.getFullYear()].join(
      ' '
    );
  }
  createLedger(ledger: string) {
    this.databaseService
      .createLedger(ledger, this.todayLedger)
      .then((res) => {});
  }
  getTime(time: Timestamp) {
    return new Date(time.seconds * 1000).toLocaleTimeString();
  }
  addTransaction(type: string) {
    const dialog = this.dialog.open(CreditComponent);

    dialog.closed.subscribe((data: any) => {
      if (data) {
        this.dataProvider.pageSetting.blur = true;
        data['time'] = new Date();
        console.log(this.todayLedger);
        this.databaseService.getLedger(this.ledgerDate).then((res) => {
          if (res) {
            let updateLedger = res as Ledger;

            if (type == 'debit') {
              updateLedger.debitLedger.push(data as LedgerTransaction);
              updateLedger.totalDebit += +data.amount;
            } else {
              updateLedger.creditLedger.push(data as LedgerTransaction);
              updateLedger.totalCredit += +data.amount;
            }
            this.databaseService
              .updateLedger(this.ledgerDate, updateLedger)
              .then((res) => {
                console.log(res);
                this.dataProvider.pageSetting.blur = false;
                this.alert.presentToast((type=='debit' ? 'Debit' :  'Credit')+' Added successfully');
                this.ngOnInit()
              });
          }
        });
      }
    });

    // this.todayLedger.debitLedger.push({
    //   // transactionId: '1',
    //   // time: new Date(),
    //   to: 'Test',--
    //   narration: 'Test',--
    //   from: 'Test',--
    //   amount: 0,---
    // });
  }
}

interface Ledger {
  date: Date;
  description: string;
  totalDebit: number;
  totalCredit: number;
  creditLedger: LedgerTransaction[];
  debitLedger: LedgerTransaction[];
}
interface LedgerTransaction {
  transactionId: string;
  time: any;
  to: string;
  narration: string;
  from: string;
  amount: number;
}