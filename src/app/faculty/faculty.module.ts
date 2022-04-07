import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyRestrictedFilesComponent } from './faculty-restricted-files/faculty-restricted-files.component';
import { FacultyRestrictedFileTableComponent } from './faculty-restricted-files/faculty-restricted-file-table/faculty-restricted-file-table.component';
import { FacultyRestrictedFileSearchBarComponent } from './faculty-restricted-files/faculty-restricted-file-search-bar/faculty-restricted-file-search-bar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FacultyRestrictedFilesComponent,
    FacultyRestrictedFileTableComponent,
    FacultyRestrictedFileSearchBarComponent,
  ],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    SharedModule
  ]
})
export class FacultyModule { }
