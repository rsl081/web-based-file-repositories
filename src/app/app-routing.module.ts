import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AdminDashboardComponent } from './admin/home/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: '/admin/level', pathMatch: 'full'},
  {path: 'admin', component: AdminModule, children: [
    {path: 'level', component: AdminDashboardComponent}
  ]}
  // new routes will be added once the other components are done
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
