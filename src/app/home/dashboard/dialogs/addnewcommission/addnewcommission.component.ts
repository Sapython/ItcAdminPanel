import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addnewcommission',
  templateUrl: './addnewcommission.component.html',
  styleUrls: ['./addnewcommission.component.scss']
})
export class AddnewcommissionComponent {
  title:any="Add New Commission"
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
