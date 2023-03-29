import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-addnewpackage',
  templateUrl: './addnewpackage.component.html',
  styleUrls: ['./addnewpackage.component.scss']
})
export class AddnewpackageComponent implements OnInit  {
  title:any="Add New Package";
  form!: FormGroup;

  constructor(private dialog:MatDialog){}
  ngOnInit(): void {
    this.form = new FormGroup({
      'hour':new FormControl(null),
      'km':new FormControl(null),
      'SUV':new FormControl(null),
      'Sedan':new FormControl(null),
      'Traveller':new FormControl(null),
      'Hatchback':new FormControl(null)
    });
  }
onCancel(){
}
onSubmit(){
console.log(this.form);
}
}
