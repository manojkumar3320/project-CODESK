import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddemployeeComponent } from './addemployee.component';

const routes: Routes = [
  {
    path: '',
    component: AddemployeeComponent,
  },
  {
    path: '',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddemployeeRoutingModule {}
