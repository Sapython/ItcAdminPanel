import { EditPackageComponent } from './../dialog/edit-package/edit-package.component';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss']
})
export class RentalComponent {
  isChecked:boolean=true;
  constructor(private dialog:MatDialog){  }
  editPackage(){
    this.dialog.open(EditPackageComponent)
  }
}
