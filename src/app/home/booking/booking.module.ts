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
import { AssignDriverDialogComponent } from './dialogs/assign-driver-dialog/assign-driver-dialog.component';
import { AssignGuideDialogComponent } from './dialogs/assign-guide-dialog/assign-guide-dialog.component';
import { BookingDetailOfRentalComponent } from './dialogs/booking-detail-of-rental/booking-detail-of-rental.component';
import { CompleteInfoBdrDialogComponent } from './dialogs/complete-info-bdr-dialog/complete-info-bdr-dialog.component';
import { BookingDetailsOfOutstationComponent } from './dialogs/booking-details-of-outstation/booking-details-of-outstation.component';
import { OutstaionCompleteInfoComponent } from './dialogs/outstaion-complete-info/outstaion-complete-info.component';
import { TourCompleteInfoComponent } from './dialogs/tour-complete-info/tour-complete-info.component';
import { TourwiseBookingInfoComponent } from './dialogs/tourwise-booking-info/tourwise-booking-info.component';


@NgModule({
  declarations: [
    BookingComponent,
    AllbookingComponent,
    RideRentalComponent,
    OutstationsComponent,
    ToursComponent,
    GuideComponent,
    MatConfirmDialogComponent,
    BookingDialogComponent,
    AssignDriverDialogComponent,
    AssignGuideDialogComponent,
    BookingDetailOfRentalComponent,
    CompleteInfoBdrDialogComponent,
    BookingDetailsOfOutstationComponent,
    OutstaionCompleteInfoComponent,
    TourCompleteInfoComponent,
    TourwiseBookingInfoComponent
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
