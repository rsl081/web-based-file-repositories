import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';


import { FacultyParameterComponent } from './faculty/faculty-parameter/faculty-parameter.component';

const routes: Routes = [
  { 
    path: '', 
    component: LoginComponent
    // component: FacultyParameterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
