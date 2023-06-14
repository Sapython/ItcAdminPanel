import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { AddblogComponent } from '../dialog/addblog/addblog.component';

import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  isChecked:boolean=true;
  constructor(private dialog:MatDialog, private database:DatabaseService){}

  blogs:any[]=[];

  getBlogs(){
    this.database.getBlogs().then((res:any)=>{
      res.forEach((element: any) => {
        this.blogs.push({
          ...element.data(),
          id: element.id,
        });
        console.log(this.blogs);
      });
    })
  }

  addBlog(){
    let dialog = this.dialog.open(AddblogComponent)
    dialog.disableClose = true;
  }
 

  ngOnInit(): void {
    this.getBlogs();
  }
}
