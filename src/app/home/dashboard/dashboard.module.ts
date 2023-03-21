import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { ConfirmDeleteComponent } from './dialogs/confirm-delete/confirm-delete.component';
import { ConfirmGreenComponent } from './dialogs/confirm-green/confirm-green.component';
import { TableinfoComponent } from './dialogs/tableinfo/tableinfo.component';
import { RiderenataltableinfoComponent } from './dialogs/riderenataltableinfo/riderenataltableinfo.component';
import { RecentbookingassignguideComponent } from './dialogs/recentbookingassignguide/recentbookingassignguide.component';
import { RecentbookingbookingdetailsComponent } from './dialogs/recentbookingbookingdetails/recentbookingbookingdetails.component';
import { OutstationassignguideComponent } from './dialogs/outstationassignguide/outstationassignguide.component';
import { OutstationcompletedComponent } from './dialogs/outstationcompleted/outstationcompleted.component';
import { TourassigninfoComponent } from './dialogs/tourassigninfo/tourassigninfo.component';
import { AddnewpackageComponent } from './dialogs/addnewpackage/addnewpackage.component';
import { AddnewcommissionComponent } from './dialogs/addnewcommission/addnewcommission.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ConfirmDeleteComponent,
    ConfirmGreenComponent,
    TableinfoComponent,
    RiderenataltableinfoComponent,
    RecentbookingassignguideComponent,
    RecentbookingbookingdetailsComponent,
    OutstationassignguideComponent,
    OutstationcompletedComponent,
    TourassigninfoComponent,
    AddnewpackageComponent,
    AddnewcommissionComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    MatExpansionModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
