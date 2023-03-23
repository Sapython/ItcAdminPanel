import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatabaseService } from 'services/database/database.service';
import { AddblogComponent } from 'src/app/home/content/dialog/addblog/addblog.component';
import { DeleteBannerComponent } from 'src/app/home/content/dialog/delete-blog/delete-banner.component';
import { EditblogComponent } from 'src/app/home/content/dialog/editblog/editblog.component';
import { DataProvider } from 'src/app/providers/data.provider';


@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {

  @Input() blog:any;
  constructor(private dialog:MatDialog, private database:DatabaseService, public dataProvider:DataProvider){}
  isChecked:boolean=true;
  addBlog(){
    this.dialog.open(AddblogComponent)
  }
  editBlog(id:any){
    this.dataProvider.updateBlog = id ;
    this.dialog.open(EditblogComponent)
  }
  onDelete(){
    this.dialog.open(DeleteBannerComponent)
  }
}
