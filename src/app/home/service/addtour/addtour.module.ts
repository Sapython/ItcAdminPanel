import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddtourRoutingModule } from './addtour-routing.module';
import { AddtourComponent } from './addtour.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddtourComponent
  ],
  imports: [
    CommonModule,
    AddtourRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule,
    GoogleMapsModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddtourModule { }
