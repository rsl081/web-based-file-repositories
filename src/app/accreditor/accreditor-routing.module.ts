import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccreDashboardComponent } from './accre-dashboard/accre-dashboard.component';
import { AccreHomeComponent } from './accre-home/accre-home.component';
import { AccreditorEditProfileComponent } from './accreditor-edit-profile/accreditor-edit-profile.component';

const routes: Routes = [
  {
    path: 'accreditor',
    component: AccreHomeComponent,
    children:[
      {
        path:'accre-dashboard',
        component:AccreDashboardComponent,
      },
      {
        path:'accreditor-edit-profile',
        component:AccreditorEditProfileComponent,
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccreditorRoutingModule { }
