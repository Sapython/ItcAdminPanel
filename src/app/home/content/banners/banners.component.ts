import { EditBannerComponent } from './../dialog/edit-banner/edit-banner.component';
import { DeleteBannerComponent } from './../dialog/delete-banner/delete-banner.component';
import { AddBannerComponent } from './../dialog/add-banner/add-banner.component';

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent {
  isChecked:boolean=true;
constructor(private dialog:MatDialog){}
addBanner(){
  this.dialog.open(AddBannerComponent)
}
onDelete(){
  this.dialog.open(DeleteBannerComponent)
}
editBanner(){
  this.dialog.open(EditBannerComponent)
}
}
