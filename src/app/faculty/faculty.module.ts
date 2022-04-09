import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyRestrictedFilesComponent } from './faculty-restricted-files/faculty-restricted-files.component';
import { FacultyRestrictedFileTableComponent } from './faculty-restricted-files/faculty-restricted-file-table/faculty-restricted-file-table.component';
import { FacultyRestrictedFileSearchBarComponent } from './faculty-restricted-files/faculty-restricted-file-search-bar/faculty-restricted-file-search-bar.component';
import { SharedModule } from '../shared/shared.module';
import { FacultyHomeComponent } from './faculty-home/faculty-home.component';
import { FacultyEditProfileComponent } from './faculty-edit-profile/faculty-edit-profile.component';
import { FacultySidebarComponent } from './faculty-sidebar/faculty-sidebar.component';
import { FacultyDashboardComponent } from './faculty-dashboard/faculty-dashboard.component';
import { FacultyAreasComponent } from './faculty-areas/faculty-areas.component';
import { FacultyFilesComponent } from './faculty-files/faculty-files.component';
import { FacultyFileSearchBarComponent } from './faculty-files/faculty-file-search-bar/faculty-file-search-bar.component';
import { FacultyFileTableComponent } from './faculty-files/faculty-file-table/faculty-file-table.component';
import { FacultyParametersComponent } from './faculty-parameters/faculty-parameters.component';

@NgModule({
  declarations: [
    FacultyRestrictedFilesComponent,
    FacultyRestrictedFileTableComponent,
    FacultyRestrictedFileSearchBarComponent,
    FacultyHomeComponent,
    FacultyEditProfileComponent,
    FacultySidebarComponent,
    FacultyDashboardComponent,
    FacultyAreasComponent,
    FacultyFilesComponent,
    FacultyFileSearchBarComponent,
    FacultyFileTableComponent,
    FacultyParametersComponent,
  ],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    SharedModule
  ]
})
export class FacultyModule { }
