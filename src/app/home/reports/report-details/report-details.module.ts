import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportDetailsRoutingModule } from './report-details-routing.module';
import { ReportDetailsComponent } from './report-details.component';
import { MaterialModule } from 'src/app/services/material/material.module';


@NgModule({
  declarations: [
    ReportDetailsComponent
  ],
  imports: [
    CommonModule,
    ReportDetailsRoutingModule,
    MaterialModule
  ]
})
export class ReportDetailsModule { }
