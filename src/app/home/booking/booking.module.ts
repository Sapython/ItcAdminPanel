import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { AllbookingComponent } from './allbooking/allbooking.component';
import { RideRentalComponent } from './ride-rental/ride-rental.component';
import { OutstationsComponent } from './outstations/outstations.component';
import { ToursComponent } from './tours/tours.component';
import { GuideComponent } from './guide/guide.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatConfirmDialogComponent } from './dialogs/mat-confirm-dialog/mat-confirm-dialog.component';
import { BookingDialogComponent } from './dialogs/booking-dialog/booking-dialog.component';


@NgModule({
  declarations: [
    BookingComponent,
    AllbookingComponent,
    RideRentalComponent,
    OutstationsComponent,
    ToursComponent,
    GuideComponent,
    MatConfirmDialogComponent,
    BookingDialogComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    MatIconModule,
    MatExpansionModule,
    MatTabsModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class BookingModule { }
