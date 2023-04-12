import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import { AlertsAndNotificationsService } from 'src/app/services/alerts-and-notification/alerts-and-notifications.service';
import { DatabaseService } from 'src/app/services/database/database.service';
import { Timestamp } from '@angular/fire/firestore';
import autoTable from 'jspdf-autotable';


@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent {
  reports: any[] = []
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  type: string = '';
  AllBookings: any[] = [];
  currentData: any;
  gotData: boolean = false;
  constructor(private database: DatabaseService, private activatedRoute: ActivatedRoute, private alertify: AlertsAndNotificationsService) {
    this.activatedRoute.params.subscribe((params) => {
      console.log("params", params["id"]);
      this.type = params["id"];
    })
  }

  ngOnInit(): void {
    // this.bookings();
    if (this.type == 'order-reports') {
      this.bookings();
    }
  }


  bookings() {
    this.database.bookings().then((res) => {
      res.forEach((element: any) => {
        this.AllBookings.push({
          ...element.data(),
          id: element.id,
        });
      });
      this.gotData = true;
      console.log("this.AllBookings", this.AllBookings);
    });
  }

  src: any;

  export() {
    if (this.gotData) {
      console.log("Exporting");
      this.alertify.presentToast("Exporting");
      const doc = new jsPDF();
      doc.text("Order Report!", 10, 10);

      // console.log("servicesName", servicesName);
      autoTable(doc, {
        head: [['Order', 'Billing Stage', 'status', 'User', 'Phone']],
        body: 
          this.AllBookings.map((data: any) => {
            return [
              data.id,
              data.orderDetail?.stage,
              data.status,
              data.user?.displayName,
              data.user?.phone]
          }),
        
      })
      doc.save("a4.pdf");

      // also export in csv
      let csvData = [['Order', 'Stage', 'status', 'User', 'Phone']];
      csvData.push(
        this.AllBookings.map((data: any) => {
          return [
            data.id,
            data.orderDetail?.stage,
            data.status,
            data.user?.displayName,
            data.user?.phone
          ].join(', ')
        }),
      )
      console.log("csvData", csvData);

      this.downloadCSV(csvData);
    }
    else {
      this.alertify.presentToast("No Data Found");
    }
  }

  downloadCSV(csvData: any[]) {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvData.forEach(function (rowArray) {
      let row = rowArray.join(",");
      csvContent += row + "\r \n";
    });
    console.log(csvContent)
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.csv");
    document.body.appendChild(link); // Required for FF

    link.click(); // This will download the data file named "my_data.csv".
  }




}


