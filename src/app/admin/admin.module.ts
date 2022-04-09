import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminFilesComponent } from './admin-files/admin-files.component';
import { AdminFileTableComponent } from './admin-files/admin-file-table/admin-file-table.component';
import { AdminFileSearchBarComponent } from './admin-files/admin-file-search-bar/admin-file-search-bar.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLevelsComponent } from './admin-levels/admin-levels.component';

import { AdminCreateAccountComponent } from './admin-create-account/admin-create-account.component';
import { AdminChangePassComponent } from './admin-change-pass/admin-change-pass.component';
import { AdminSummaryGenComponent } from './admin-summary-gen/admin-summary-gen.component';
import { AdminAreasComponent } from './admin-areas/admin-areas.component';

import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminDialogCardComponent } from './admin-dialog-card/admin-dialog-card.component';
import { SharedModule } from '../shared/shared.module';
import { AdminParametersComponent } from './admin-parameters/admin-parameters.component';
import { NavigationService } from '../shared/navigation.service';
import { ViewportService } from '../shared/viewport.service';


@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminDashboardComponent,
    AdminLevelsComponent,
    AdminFilesComponent,
    AdminFileTableComponent,
    AdminFileSearchBarComponent,
    AdminHomeComponent,
    AdminCreateAccountComponent,
    AdminChangePassComponent,
    AdminSummaryGenComponent,
    AdminAreasComponent,
    AdminSidebarComponent,
    AdminDialogCardComponent,
    AdminParametersComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ],
  providers: [NavigationService, ViewportService],
  exports: [
    AdminHomeComponent
  ],
})
export class AdminModule {}
