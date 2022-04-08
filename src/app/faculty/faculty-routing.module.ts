import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyEditProfileComponent } from './faculty-edit-profile/faculty-edit-profile.component';
import { FacultyHomeComponent } from './faculty-home/faculty-home.component';

const routes: Routes = [
  {
    path: 'faculty',
    component: FacultyHomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'level',
        pathMatch: 'full',
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
