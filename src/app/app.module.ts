import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatConfirmDialogComponent } from './home/booking/dialogs/mat-confirm-dialog/mat-confirm-dialog.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from 'src/app/services/material/material.module';
import { ComponentModule } from 'src/components/component.module';
import { AlertsAndNotificationsService } from './services/alerts-and-notification/alerts-and-notifications.service';
import { AuthenticationService } from './services/auth/authentication.service';
import { DatabaseService } from './services/database/database.service';
import { UserDataService } from './services/user/user-data.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DataProvider } from './providers/data.provider';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ComponentModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
    MatSnackBarModule,
    MatNativeDateModule,
    MatProgressSpinnerModule
  ],
  providers: [AlertsAndNotificationsService,AuthenticationService,DatabaseService,UserDataService, ScreenTrackingService,UserTrackingService, DataProvider, MaterialModule,MatSnackBar],
  bootstrap: [AppComponent],
  entryComponents:[MatConfirmDialogComponent]
})
export class AppModule { }
