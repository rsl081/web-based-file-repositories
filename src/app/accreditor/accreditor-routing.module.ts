import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccreAreaComponent } from './accre-area/accre-area.component';
import { AccreDashboardComponent } from './accre-dashboard/accre-dashboard.component';
import { AccreFilesComponent } from './accre-files/accre-files.component';
import { AccreHomeComponent } from './accre-home/accre-home.component';
import { AccreParametersComponent } from './accre-parameters/accre-parameters.component';
import { AccreditorEditProfileComponent } from './accreditor-edit-profile/accreditor-edit-profile.component';

const routes: Routes = [
  {
    path: 'accreditor',
    component: AccreHomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'area',
        pathMatch: 'full',
      },
      {
        path: '',
        component: AccreDashboardComponent,
        children: [
          {
            path: 'area',
            component: AccreAreaComponent,
            children: [
              {
                path: 'parameter',
                component: AccreParametersComponent,
                children: [
                  {
                    path: 'files',
                    component: AccreFilesComponent,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: 'edit-profile',
        component: AccreditorEditProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccreditorRoutingModule { }
