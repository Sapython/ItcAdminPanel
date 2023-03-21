import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddtourRoutingModule } from './addtour-routing.module';
import { AddtourComponent } from './addtour.component';


@NgModule({
  declarations: [
    AddtourComponent
  ],
  imports: [
    CommonModule,
    AddtourRoutingModule
  ]
})
export class AddtourModule { }
