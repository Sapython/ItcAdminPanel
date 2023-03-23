import { MatDialogModule } from '@angular/material/dialog';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { BannersComponent } from './banners/banners.component';
import { BlogComponent } from './blog/blog.component';
import { SpotComponent } from './spot/spot.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddblogComponent } from './dialog/addblog/addblog.component';
import { EditblogComponent } from './dialog/editblog/editblog.component';
import { DeleteBannerComponent } from './dialog/delete-blog/delete-banner.component';
import { AddBannerComponent } from './dialog/add-banner/add-banner.component';
import { EditBannerComponent } from './dialog/edit-banner/edit-banner.component';
import { ComponentModule } from 'src/components/component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    ContentComponent,
    BannersComponent,
    BlogComponent,
    SpotComponent,
    AddblogComponent,
    EditblogComponent,
    DeleteBannerComponent,
    AddBannerComponent,
    EditBannerComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    MatTabsModule,
    MatSlideToggleModule,
    
    MatPaginatorModule,
    MatDialogModule,
    ComponentModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentModule,
    MaterialExampleModule
  ]
})
export class ContentModule { }
