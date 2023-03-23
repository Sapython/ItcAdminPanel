import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlertsAndNotificationsService } from 'services/alerts-and-notification/alerts-and-notifications.service';
import { DatabaseService } from 'services/database/database.service';
import { DataProvider } from 'src/app/providers/data.provider';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.scss']
})
export class AddblogComponent {
  public url: any;
  public file: any;
  title: any = 'Add New Package';

  public blogForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private dialog: MatDialog, private database: DatabaseService, private alertly: AlertsAndNotificationsService, private dataProvider: DataProvider) { }
  ngOnInit(): void { }
  onCancel() { }

  async uploadFile(files: FileList | null) {
    if (files) {
      const file = files[0];
      const url = await this.database.upload('users/' + file.name, file);
      this.url = url;
      console.log(this.url)
    }
  }

  async addBlog() {
    await this.uploadFile(this.file?.target?.files);
    if (this.url) {
      const blog = {
        ...this.blogForm.value,
        created: new Date(),
        photoURL: this.url,
        author: {
          displayName: this.dataProvider.user.displayName,
          email: this.dataProvider.user.email,
          phone: this.dataProvider.user.phone,
          photoURL: this.dataProvider.user.photoURL,
        }
      }
      console.log(blog)
      this.database.addBlog(this.blogForm.value);
      this.alertly.presentToast('Blog Added Successfully');
    }


  }
}
