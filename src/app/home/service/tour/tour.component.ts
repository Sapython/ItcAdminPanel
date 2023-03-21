import { DatabaseService } from 'services/database/database.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteWarnComponent } from '../dialog/delete-warn/delete-warn.component';
import { home } from '../../model/home.model';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent {
  home = new home()
  list:any[]=[];
  isChecked:boolean=true;

  constructor(
    private dialog:MatDialog,
    // public services:DatabaseService
    ){}
  ngOnInit() {
    this.list.push(this.home);
  }
  // addNewCommission(){
  //   this.home = new home();
  //   this.list.push(this.home)
  //   this.services.addCommisionData(this.home).then(res=>{
  //     console.log(res);

  //   })
  //   this.services.getCommisionData().then(res=>{
  //     console.log(res);
  //   })








}
// onDelete(){
//   this.dialog.open(DeleteWarnComponent,{ disableClose: true })
// }
// }
