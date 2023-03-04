import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  panelOpenState = false;
  AllBookings:any[] = [];
  // constructor(private database:DatabaseService) { }

  ngOnInit(): void {
    // this.bookings();
  }


  // bookings(){

  //   this.database.bookings().then((res) => {
  //     res.forEach((element: any) => {
  //       this.AllBookings.push({
  //         ...element.data(),
  //         id: element.id,
  //       });
  //       console.log(this.bookings);
  //     });
  //   });
  // }
}
