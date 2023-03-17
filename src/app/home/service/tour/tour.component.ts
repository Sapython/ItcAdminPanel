import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteWarnComponent } from '../dialog/delete-warn/delete-warn.component';
import { home } from '../model/home.model';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent {
  home = new home()
  list:any[]=[];
  isChecked:boolean=true;

  constructor(private dialog:MatDialog){}
  ngOnInit() {
    this.list.push(this.home);
  }
  addNewCommission(){
    this.home = new home();
    this.list.push(this.home)
}
onDelete(){
  this.dialog.open(DeleteWarnComponent,{ disableClose: true })
}
}
