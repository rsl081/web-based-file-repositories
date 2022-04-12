import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccreditorRoutingModule } from './accreditor-routing.module';
import { AccreHomeComponent } from './accre-home/accre-home.component';
import { AccreDashboardComponent } from './accre-dashboard/accre-dashboard.component';
import { AccreditorEditProfileComponent } from './accreditor-edit-profile/accreditor-edit-profile.component';
import { AccreSidebarComponent } from './accre-sidebar/accre-sidebar.component';
import { AccreFilesComponent } from './accre-files/accre-files.component';
import { AccreFileSearchBarComponent } from './accre-files/accre-file-search-bar/accre-file-search-bar.component';
import { AccreFileTableComponent } from './accre-files/accre-file-table/accre-file-table.component';
import { AccreAreaComponent } from './accre-area/accre-area.component';
import { SharedModule } from '../shared/shared.module';
import { SharedModule } from '../shared/shared.module';
import { NavigationService } from '../shared/navigation.service';
import { ViewportService } from '../shared/viewport.service';


@NgModule({
  declarations: [
    AccreHomeComponent,
    AccreDashboardComponent,
    AccreditorEditProfileComponent,
    AccreSidebarComponent,
    AccreFilesComponent,
    AccreFileSearchBarComponent,
    AccreFileTableComponent,
    AccreAreaComponent
  ],
  imports: [
    CommonModule,
    AccreditorRoutingModule,
    SharedModule
  ],
  providers: [NavigationService, ViewportService],

})
export class AccreditorModule { }
