import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-vehicle-category',
  templateUrl: './add-vehicle-category.component.html',
  styleUrls: ['./add-vehicle-category.component.scss']
})
export class AddVehicleCategoryComponent {
  form!: FormGroup;

  constructor(private dialog:MatDialog){}
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
console.log(this.form);
}
}
