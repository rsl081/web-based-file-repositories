import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminChangePassComponent } from './admin-change-pass/admin-change-pass.component';
import { AdminCreateAccountComponent } from './admin-create-account/admin-create-account.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSummaryGenComponent } from './admin-summary-gen/admin-summary-gen.component';
import { AdminAreasComponent } from './admin-areas/admin-areas.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminHomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'level',
        pathMatch: 'full',
      },
      {
        path: 'level',
        component: AdminDashboardComponent,
      },
      {
        path: 'create-account',
        component: AdminCreateAccountComponent,
      },
      {
        path: 'area',
        component: AdminAreasComponent,
      },
      {
        path: 'summary-gen',
        component: AdminSummaryGenComponent,
      },
      {
        path: 'admin/change-pass',
        component: AdminChangePassComponent,
      },
    ],
  },

  //Jayson
  // {
  //   path: 'admin', redirectTo: '/admin/level',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'admin-dashboard',
  //   component: AdminModule,
  //   children: [{ path: 'level', component: AdminDashboardComponent }],
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
