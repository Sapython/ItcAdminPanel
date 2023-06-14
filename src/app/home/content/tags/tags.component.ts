import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from './add/add.component';
import { DatabaseService } from 'src/app/services/database/database.service';
import { DataProvider } from 'src/app/providers/data.provider';
import { AlertsAndNotificationsService } from 'src/app/services/alerts-and-notification/alerts-and-notifications.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit{
  tags:Tag[] = []
  constructor(private dialog:MatDialog,private databaseService:DatabaseService,private dataProvider:DataProvider,private alertify:AlertsAndNotificationsService){}
  ngOnInit(): void {
    this.databaseService.getTags().then((res)=>{
      this.tags = res.docs.map((doc)=>{return {...doc.data(),id:doc.id,} as Tag})
    })
  }
  deleteTag(tagID:string){
    this.dataProvider.pageSetting.blur = true;
    this.databaseService.deleteTag(tagID).then((res)=>{
      this.alertify.presentToast('Deleted tag')
      this.ngOnInit()
    }).catch((err)=>{
      console.log("err",err);
      this.alertify.presentToast('Error deleting tag','error')
    }).finally(()=>{
      this.dataProvider.pageSetting.blur = false;
    })
  }

  addTag(){
    const dialog = this.dialog.open(AddComponent)
    dialog.afterClosed().subscribe((data)=>{
      console.log("data",data);
      if(data){
        if(data.name && data.color){
          this.dataProvider.pageSetting.blur = true;
          this.databaseService.addTag(data).then((res)=>{
            this.alertify.presentToast('Added tag '+data.name)
            this.ngOnInit()
          }).catch((err)=>{
            console.log("err",err);
            this.alertify.presentToast('Error adding tag','error')
          }).finally(()=>{
            this.dataProvider.pageSetting.blur = false;
          })
        }
      }
    })
  }
}

export interface Tag {
  id:string;
  name:string;
  color:string;
  connections?:number;
  updatedDate?:Date;
  createdDate?:Date;
}