import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddblogComponent } from 'src/app/home/content/dialog/addblog/addblog.component';
import { DeleteBannerComponent } from 'src/app/home/content/dialog/delete-blog/delete-banner.component';
import { EditblogComponent } from 'src/app/home/content/dialog/editblog/editblog.component';

@Component({
  selector: 'app-spot-card',
  templateUrl: './spot-card.component.html',
  styleUrls: ['./spot-card.component.scss']
})
export class SpotCardComponent {
  @Input() enabled:boolean=true;
  @Input() image:string = '';
  @Input() name:string = '';
  @Input() address:string = '';
  constructor(private dialog:MatDialog){}
  addBlog(){
    this.dialog.open(AddblogComponent)
  }
  editBlog(){
    this.dialog.open(EditblogComponent)
  }
  onDelete(){
    this.dialog.open(DeleteBannerComponent)
  }
}
