import { EditBannerComponent } from './../dialog/edit-banner/edit-banner.component';
import { DeleteBannerComponent } from './../dialog/delete-banner/delete-banner.component';
import { AddBannerComponent } from './../dialog/add-banner/add-banner.component';

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewBannerComponent } from 'src/components/add-new-banner/add-new-banner.component';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent {
  isChecked: boolean = true;
  banners: any[] = []

  constructor(private dialog: MatDialog, private database:DatabaseService) { }


  ngOnInit(): void {
    this.getBanners();
  }

  getBanners(){
    this.database.getBanners().then(res => {
      this.banners = []
      res.forEach((banner) => {
        this.banners.push({...banner.data() as any,id:banner.id})
      })
      console.log("Banners",this.banners);
    })
  }


  addNewBanner() {
    this.dialog.open(AddNewBannerComponent, { data: { mode: 'add' } })
  }
  onDelete() {
    this.dialog.open(DeleteBannerComponent)
  }
  editBanner() {
    this.dialog.open(EditBannerComponent)
  }
}
