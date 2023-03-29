import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss'],
})
export class AdduserComponent {
  
  constructor(
    private fsData: DatabaseService,
    ) {}
  form = new FormGroup({
    profilePhoto: new FormControl(null),
    name: new FormControl(null),
    lastName: new FormControl(null),
    phoneNumber: new FormControl(null),
    baseLocation: new FormControl(null),
    email: new FormControl(null),
    language: new FormControl(null),
    driverLicense: new FormControl(null),
    dateOfBirth: new FormControl(null),
    licenseNumber: new FormControl(null),
    licenseExpireDate: new FormControl(null),
    licensePhoto: new FormControl(null),
    carRegistrationNumber: new FormControl(null),
    carCompany: new FormControl(null),
    salaryRange: new FormControl(null),
  });
  addUser() {
    console.log(this.form.value);
    this.fsData.addDriver(this.form.value);
  }
}
