import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { SpotCardComponent } from './spot-card/spot-card.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewBannerComponent } from './add-new-banner/add-new-banner.component';
import { MaterialModule } from 'src/app/services/material/material.module';
import { AddNewAreaComponent } from './add-new-area/add-new-area.component';
import { AddVehicleCategoryComponent } from './add-vehicle-category/add-vehicle-category.component';


const components = [
  BlogCardComponent,
  SpotCardComponent,
  AddNewBannerComponent,
  AddNewAreaComponent,
  AddVehicleCategoryComponent
];

@NgModule({
  declarations: [components],
  imports: [CommonModule,FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [components]
})
export class ComponentModule { }
