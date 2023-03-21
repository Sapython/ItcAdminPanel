import { GoogleMapsModule } from '@angular/google-maps';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddlocationRoutingModule } from './addlocation-routing.module';
import { AddlocationComponent } from './addlocation.component';


@NgModule({
  declarations: [
    AddlocationComponent
  ],
  imports: [
    CommonModule,
    AddlocationRoutingModule,
    GoogleMapsModule
  ]
})
export class AddlocationModule { }
