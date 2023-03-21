import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './service.component';

const routes: Routes = [{ path: '', component: ServiceComponent },
{ path: 'addlocation', loadChildren: () => import('./addlocation/addlocation.module').then(m => m.AddlocationModule) },
{ path: 'addtour', loadChildren: () => import('./addtour/addtour.module').then(m => m.AddtourModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
