import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { SpotCardComponent } from './spot-card/spot-card.component';
import { MaterialExampleModule } from 'src/app/material/material.module';

const components = [
  BlogCardComponent,
  SpotCardComponent,
];

@NgModule({
  declarations: [components],
  imports: [CommonModule, MaterialExampleModule],
  exports: [components]
})
export class ComponentModule { }
