import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'booking',
        loadChildren: () =>
          import('./booking/booking.module').then((m) => m.BookingModule),
      },
      {
        path: 'service',
        loadChildren: () =>
          import('./service/service.module').then((m) => m.ServiceModule),
      },
      {
        path: 'ledger',
        loadChildren: () =>
          import('./ledger/ledger.module').then((m) => m.LedgerModule),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserModule),
      },
      { path: 'content', loadChildren: () => import('./content/content.module').then(m => m.ContentModule) },
      { path: 'reports', loadChildren: () => import('./reports/reports/reports.module').then(m => m.ReportsModule) },
      { path: 'reportDetails', loadChildren: () => import('./reports/report-details/report-details.module').then(m => m.ReportDetailsModule) },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
