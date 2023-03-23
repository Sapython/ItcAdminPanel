import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSpotComponent } from '../dialog/add-spot/add-spot.component';

@Component({
  selector: 'app-spot',
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.scss']
})
export class SpotComponent {
  constructor(private dialog:MatDialog){}
  addBlog(){
    this.dialog.open(AddSpotComponent)
  }
}
