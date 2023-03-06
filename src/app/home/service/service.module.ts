import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CabComponent } from './cab/cab.component';
import { RentalComponent } from './rental/rental.component';
import { OutstationComponent } from './outstation/outstation.component';
import { TourComponent } from './tour/tour.component';
import { GuideComponent } from './guide/guide.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ServiceComponent,
    CabComponent,
    RentalComponent,
    OutstationComponent,
    TourComponent,
    GuideComponent,

  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ServiceModule { }
