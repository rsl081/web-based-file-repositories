import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardAddCardComponent } from './shared/admin-dashboard-add-card/admin-dashboard-add-card.component';
import { AdminDashboardCardComponent } from './shared/admin-dashboard-card/admin-dashboard-card.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { AdminParameterComponent } from './admin-parameter/admin-parameter.component';
import { AdminFilesComponent } from './admin-files/admin-files.component';
import { AdminFileTableComponent } from './admin-files/admin-file-table/admin-file-table.component';
import { AdminFileSearchBarComponent } from './admin-files/admin-file-search-bar/admin-file-search-bar.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLevelsComponent } from './admin-home/admin-dashboard/admin-levels/admin-levels.component';
import { AdminLevelComponent } from './admin-home/admin-dashboard/admin-levels/admin-level/admin-level.component';
import { AdminDashboardComponent } from './admin-home/admin-dashboard/admin-dashboard.component';
import { AdminCreateAccountComponent } from './admin-create-account/admin-create-account.component';
import { AdminChangePassComponent } from './admin-change-pass/admin-change-pass.component';
import { AdminSummaryGenComponent } from './admin-summary-gen/admin-summary-gen.component';

@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminDashboardComponent,
    AdminLevelsComponent,
    AdminLevelComponent,
    AdminDashboardAddCardComponent,
    AdminDashboardCardComponent,
    AdminParameterComponent,
    AdminFilesComponent,
    AdminFileTableComponent,
    AdminFileSearchBarComponent,
    AdminHomeComponent,
    AdminCreateAccountComponent,
    AdminChangePassComponent,
    AdminSummaryGenComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    AdminRoutingModule
  ],
  exports: [
    AdminHomeComponent
  ],
})
export class AdminModule {}
