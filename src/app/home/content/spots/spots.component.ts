import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSpotComponent } from '../dialog/add-spot/add-spot.component';
import { AddblogComponent } from '../dialog/addblog/addblog.component';

@Component({
  selector: 'app-spots',
  templateUrl: './spots.component.html',
  styleUrls: ['./spots.component.scss']
})
export class SpotsComponent {
  constructor(private dialog:MatDialog){}
  addBlog(){
    this.dialog.open(AddSpotComponent)
  }
}
