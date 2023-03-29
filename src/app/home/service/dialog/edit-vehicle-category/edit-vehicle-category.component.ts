import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-edit-vehicle-category',
  templateUrl: './edit-vehicle-category.component.html',
  styleUrls: ['./edit-vehicle-category.component.scss']
})
export class EditVehicleCategoryComponent {
  form!: FormGroup;

  constructor(private dialog:MatDialog,private fs:DatabaseService){}
  ngOnInit(): void {
    this.form = new FormGroup({
      'image':new FormControl(null),
      'VehicleCategory':new FormControl(null),
      'Discription':new FormControl(null),
      'seats':new FormControl(null),
      'capacity':new FormControl(null),
      'ac-nonac':new FormControl(null),
      'fullprice':new FormControl(null),
      'priceperhour':new FormControl(null)

    });
  }
onCancel(){
}
onSubmit(){

  console.log(this.form.value);
}
}
