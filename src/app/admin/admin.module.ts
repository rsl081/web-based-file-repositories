import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './home/admin-dashboard/admin-dashboard.component';
import { AdminLevelsComponent } from './home/admin-dashboard/admin-levels/admin-levels.component';
import { AdminLevelComponent } from './home/admin-dashboard/admin-levels/admin-level/admin-level.component';
import { AdminDashboardAddCardComponent } from './shared/admin-dashboard-add-card/admin-dashboard-add-card.component';
import { AdminDashboardCardComponent } from './shared/admin-dashboard-card/admin-dashboard-card.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { AdminParameterComponent } from './admin-parameter/admin-parameter.component';
import { AdminFilesComponent } from './admin-files/admin-files.component';
import { AdminFileTableComponent } from './admin-files/admin-file-table/admin-file-table.component';
import { AdminFileSearchBarComponent } from './admin-files/admin-file-search-bar/admin-file-search-bar.component';


@NgModule({
  declarations: [
    HomeComponent,
    AdminDashboardComponent,
    AdminLevelsComponent,
    AdminLevelComponent,
    AdminDashboardAddCardComponent,
    AdminDashboardCardComponent,
    AdminParameterComponent,
    AdminFilesComponent,
    AdminFileTableComponent,
    AdminFileSearchBarComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
  ],
  exports: [
    HomeComponent
  ],
})
export class AdminModule {}
