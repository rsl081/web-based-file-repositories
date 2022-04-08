import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminChangePassComponent } from './admin-change-pass/admin-change-pass.component';
import { AdminCreateAccountComponent } from './admin-create-account/admin-create-account.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSummaryGenComponent } from './admin-summary-gen/admin-summary-gen.component';
import { AdminAreasComponent } from './admin-areas/admin-areas.component';
import { AdminLevelsComponent } from './admin-levels/admin-levels.component';
import { AdminParametersComponent } from './admin-parameters/admin-parameters.component';
import { AdminFilesComponent } from './admin-files/admin-files.component';

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
        path: '',
        component: AdminDashboardComponent,
        children: [
          {
            path: 'level',
            component: AdminLevelsComponent,
            children: [
              {
                path: 'area',
                component: AdminAreasComponent,
                children: [
                  {
                    path: 'parameter',
                    component: AdminParametersComponent,
                    children: [
                      {
                        path: 'files',
                        component: AdminFilesComponent
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
