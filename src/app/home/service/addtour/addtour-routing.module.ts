import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtourComponent } from './addtour.component';

const routes: Routes = [{ path: '', component: AddtourComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddtourRoutingModule { }
