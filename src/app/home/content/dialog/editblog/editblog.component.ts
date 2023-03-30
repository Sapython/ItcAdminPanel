import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlertsAndNotificationsService } from 'src/app/services/alerts-and-notification/alerts-and-notifications.service';
import { DatabaseService } from 'src/app/services/database/database.service';
import { DataProvider } from 'src/app/providers/data.provider';


@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.scss']
})
export class EditblogComponent {
  public url: any;
  public file: any;
  title: any = 'Add New Package';
  id:any = this.dataProvider.updateBlog.id;
  public blogForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    photoURL: new FormControl(''),
  });

  constructor(private dialog: MatDialog, private database: DatabaseService, private alertly: AlertsAndNotificationsService, public dataProvider:DataProvider) { }
  ngOnInit(): void { 
    this.getBlog();
    
    
  }
  onCancel() { }


  getBlog(){
    this.database.getSingleBlog(this.id).then((res:any)=>{
      console.log(res.data())
      console.log(this.dataProvider.updateBlog)
      this.blogForm.patchValue(res.data())
    })
  }
  async uploadFile(files: FileList | null) {
    if (files) {
      const file = files[0];
      const url = await this.database.upload('blogs/' + file.name, file);
      this.url = url;
      console.log(this.url)
    }
  }

  async updateBlog() {
    await this.uploadFile(this.file?.target?.files);
    
      const blog = {
        ...this.blogForm.value,
        created: new Date(),
        photoURL: this.url || this.dataProvider.updateBlog.photoURL,
        author: this.dataProvider.updateBlog.author,
      }

      console.log(blog)
      this.database.addBlog(this.blogForm.value);
      this.alertly.presentToast('Blog Added Successfully');
    


  }



  editBlog(){

  }
}
