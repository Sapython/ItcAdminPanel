import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportDetailsRoutingModule } from './report-details-routing.module';
import { ReportDetailsComponent } from './report-details.component';
import { MaterialExampleModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    ReportDetailsComponent
  ],
  imports: [
    CommonModule,
    ReportDetailsRoutingModule,
    MaterialExampleModule
  ]
})
export class ReportDetailsModule { }
