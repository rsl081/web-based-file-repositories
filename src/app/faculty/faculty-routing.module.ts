import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyAreasComponent } from './faculty-areas/faculty-areas.component';
import { FacultyDashboardComponent } from './faculty-dashboard/faculty-dashboard.component';
import { FacultyEditProfileComponent } from './faculty-edit-profile/faculty-edit-profile.component';
import { FacultyFilesComponent } from './faculty-files/faculty-files.component';
import { FacultyHomeComponent } from './faculty-home/faculty-home.component';
import { FacultyParametersComponent } from './faculty-parameters/faculty-parameters.component';


const routes: Routes = [
  {
    path: 'faculty',
    component: FacultyHomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'area',
        pathMatch: 'full',
      },
      {
        path: '',
        component: FacultyDashboardComponent,
        children: [
          {
            path: 'area',
            component: FacultyAreasComponent,
            children: [
              {
                path: 'parameter',
                component: FacultyParametersComponent,
                children: [
                  {
                    path: 'files',
                    component: FacultyFilesComponent,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: 'edit-profile',
        component: FacultyEditProfileComponent,
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
