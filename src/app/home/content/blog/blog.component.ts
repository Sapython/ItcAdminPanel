import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { AddblogComponent } from '../dialog/addblog/addblog.component';
import { DeleteBannerComponent } from '../dialog/delete-blog/delete-banner.component';
import { EditblogComponent } from '../dialog/editblog/editblog.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  isChecked:boolean=true;
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
