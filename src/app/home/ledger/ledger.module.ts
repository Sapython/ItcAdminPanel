import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LedgerRoutingModule } from './ledger-routing.module';
import { LedgerComponent } from './ledger.component';
import {MatTabsModule} from '@angular/material/tabs';
import {  MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { CreditComponent } from './components/credit/credit.component';
import { DebitComponent } from './components/debit/debit.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SettlementComponent } from './components/settlement/settlement.component';


@NgModule({
  declarations: [
    LedgerComponent,
    CreditComponent,
    DebitComponent,
    SettlementComponent,
  ],
  imports: [
    CommonModule,
    LedgerRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
  ]
})
export class LedgerModule { }
