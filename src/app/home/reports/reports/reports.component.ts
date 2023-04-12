import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  reports: any[] = [
    {
      icon:'analytics',
      title:'Order Report',
      description:'Daily Orders Report Bill Wise',
      link:'order-report'
    },
    {
      icon:'monitoring',
      title:'Customer Wise Report',
      description:'Daily Orders Report Customer Wise',
      link:'customer-report'
    },
  ]
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  ngOnInit(): void {
  }
}
