import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { SpotCardComponent } from './spot-card/spot-card.component';
import { MaterialExampleModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewBannerComponent } from './add-new-banner/add-new-banner.component';


const components = [
  BlogCardComponent,
  SpotCardComponent,
  AddNewBannerComponent
];

@NgModule({
  declarations: [components],
  imports: [CommonModule,FormsModule, ReactiveFormsModule, MaterialExampleModule],
  exports: [components]
})
export class ComponentModule { }
