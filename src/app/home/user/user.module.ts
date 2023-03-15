import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CustomerComponent } from './customer/customer.component';
import { DriverComponent } from './driver/driver.component';
import { GuideComponent } from './guide/guide.component';
import { TouragentComponent } from './touragent/touragent.component';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ConfirmDeleteComponent } from './dialog/confirm-delete/confirm-delete.component';
import { DriverInfoComponent } from './dialog/driver-info/driver-info.component';


@NgModule({
  declarations: [
    UserComponent,
    CustomerComponent,
    DriverComponent,
    GuideComponent,
    TouragentComponent,
    ConfirmDeleteComponent,
    DriverInfoComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatDialogModule
  ]
})
export class UserModule { }
