import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertsAndNotificationsService } from 'src/app/services/alerts-and-notification/alerts-and-notifications.service';
import { DatabaseService } from 'src/app/services/database/database.service';
import { DataProvider } from 'src/app/providers/data.provider';
import { Timestamp } from '@angular/fire/firestore';
import { Blog } from 'src/structures/booking.structure';
import EditorJS from '@editorjs/editorjs';
const RawTool = require('@editorjs/raw');
const ImageTool = require('@editorjs/image');
const Checklist = require('@editorjs/checklist');
const List = require('@editorjs/list');
const Embed = require('@editorjs/embed');
const Quote = require('@editorjs/quote');
const Header = require('@editorjs/header');

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
    title: new FormControl('',Validators.required),
    excerpt: new FormControl('',Validators.required),
  });
  blogEditor = new EditorJS({holder:'blogEditor',tools:{
    raw: RawTool,
    image: {
      class: ImageTool,
      config: {
        endpoints: {
          byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
          byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
        }
      }
    },
    checklist: {
      class: Checklist,
      inlineToolbar: true,
    },
    list: {
      class: List,
      inlineToolbar: true,
      config: {
        defaultStyle: 'unordered'
      }
    },
    header: Header,
    embed: Embed,
    quote: Quote,
  }});
  constructor(private dialogRef: MatDialogRef<AddblogComponent>, private database: DatabaseService, private alertly: AlertsAndNotificationsService, private dataProvider: DataProvider) { }
  ngOnInit(): void { }
  onCancel() { }

  async uploadFile(files: FileList | null) {
    if (files) {
      const file = files[0];
      const url = await this.database.upload('users/' + file.name, file);
      this.url = url;
      console.log(this.url)
    } else {
      this.alertly.presentToast('NO Image selected');
    }
  }

  async addBlog() {
    console.log(this.dataProvider.userData);
    try {
      this.dataProvider.pageSetting.blur = true;
      let blogRes = await this.blogEditor.save();
      console.log(blogRes);
      await this.uploadFile(this.file?.target?.files);
      if (this.url) {
        const blog:Blog = {
          ...this.blogForm.value,
          body: blogRes,
          created: new Date(),
          photoURL: this.url,
          author: {
            displayName: this.dataProvider.userData.displayName,
            email: this.dataProvider.userData.email,
            phone: this.dataProvider.userData.phone,
            photoURL: this.dataProvider.userData.photoURL,
          }
        }
        console.log(blog)
        await this.database.addBlog(blog);
        this.alertly.presentToast('Blog Added Successfully');
      } else {
        this.alertly.presentToast('Please upload a photo');
      }
      this.dialogRef.close()
    } catch (error) {
      console.log(error);
      this.alertly.presentToast('Please fill all the fields');
    } finally {
      this.dataProvider.pageSetting.blur = false;
    }
  }
}

// Generate type using
// {
//   title: new FormControl(''),
//   description: new FormControl(''),
//   created: new Date(),
//   photoURL: this.url,
//   author: {
//     displayName: this.dataProvider.userData.displayName,
//     email: this.dataProvider.userData.email,
//     phone: this.dataProvider.userData.phone,
//     photoURL: this.dataProvider.userData.photoURL,
//   }
// }
// 

