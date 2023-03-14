import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataProvider } from './providers/data.provider';
import { AlertsAndNotificationsService } from './services/alerts-and-notification/alerts-and-notifications.service';
import { AuthenticationService } from './services/auth/authentication.service';
import { DatabaseService } from './services/database/database.service';
import { UserDataService } from './services/user/user-data.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [
    ScreenTrackingService,UserTrackingService,DataProvider,AuthenticationService,DatabaseService,AlertsAndNotificationsService,UserDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
