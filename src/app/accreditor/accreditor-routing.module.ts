import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccreHomeComponent } from './accre-home/accre-home.component';

const routes: Routes = [
  {
    path: 'accreditor',
    component: AccreHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccreditorRoutingModule { }
