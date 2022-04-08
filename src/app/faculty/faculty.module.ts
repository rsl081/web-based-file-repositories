import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyRestrictedFilesComponent } from './faculty-restricted-files/faculty-restricted-files.component';
import { FacultyRestrictedFileTableComponent } from './faculty-restricted-files/faculty-restricted-file-table/faculty-restricted-file-table.component';
import { FacultyRestrictedFileSearchBarComponent } from './faculty-restricted-files/faculty-restricted-file-search-bar/faculty-restricted-file-search-bar.component';
import { SharedModule } from '../shared/shared.module';
import { FacultyAreasComponent } from './faculty-areas/faculty-areas.component';
import { FacultyAreaComponent } from './faculty-areas/faculty-area/faculty-area.component';


@NgModule({
  declarations: [
    FacultyRestrictedFilesComponent,
    FacultyRestrictedFileTableComponent,
    FacultyRestrictedFileSearchBarComponent,
    FacultyAreasComponent,
    FacultyAreaComponent,
  ],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    SharedModule
  ]
})
export class FacultyModule { }
