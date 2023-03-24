import { Component } from '@angular/core';
import { AuthenticationService } from 'services/auth/authentication.service';
import { DataProvider } from './providers/data.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ITC Admin';
  constructor(public dataProvider:DataProvider,private auth:AuthenticationService){
  }
  ngOnInit(): void{
    if (window.location.hostname){
      this.dataProvider.electron = true;
    }
   
  }
}
