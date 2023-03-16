import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

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
    this.createChart();
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

  // Bar Graph
  public chart: any;
  public barThickness: number=8;
  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Sun', 'Mon', 'Tue','Wed',
								 'Thus', 'Fri', 'Sat', ], 
	       datasets: [
          {
            label: "Ride",
            data: ['100','100', '100', '100',
								 '100', '100', '100'],
            backgroundColor: '#E33737',
            barThickness: this.barThickness,
          },
          {
            label: "Outstation",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: '#FF7E1D',
            barThickness: this.barThickness,
          },
          {
            label: "Rental",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: '#DD4B87',
            barThickness: this.barThickness,
          },
          {
            label: "Tour",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: '#08A3FC',
            barThickness: this.barThickness,

          },
          {
            label: "Rental",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: '#5FB402',
            barThickness: this.barThickness,
          }     
        ]
      },
      options: {
        aspectRatio:1.1,
        plugins:{
          legend: {
            display: false
          },
}
      }
      
    });
  }
}
