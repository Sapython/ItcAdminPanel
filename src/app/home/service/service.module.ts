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
import { AddVehicleCategoryComponent } from './dialog/add-vehicle-category/add-vehicle-category.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteWarnComponent } from './dialog/delete-warn/delete-warn.component';
import { EditVehicleCategoryComponent } from './dialog/edit-vehicle-category/edit-vehicle-category.component';
import { EditPackageComponent } from './dialog/edit-package/edit-package.component';

@NgModule({
  declarations: [
    ServiceComponent,
    CabComponent,
    RentalComponent,
    OutstationComponent,
    TourComponent,
    GuideComponent,
    AddVehicleCategoryComponent,
    DeleteWarnComponent,
    EditVehicleCategoryComponent,
    EditPackageComponent,

  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule
  ]
})
export class ServiceModule { }
