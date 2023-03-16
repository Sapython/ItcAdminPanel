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

@NgModule({
  declarations: [
    LedgerComponent,
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
  ]
})
export class LedgerModule { }
