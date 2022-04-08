import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyAreasComponent } from './faculty-areas/faculty-areas.component';

const routes: Routes = [
  {
    path: 'faculty',
    component: FacultyAreasComponent,
    children: [
      {
        path: 'area',
        component: FacultyAreasComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
