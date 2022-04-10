import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccreditorRoutingModule } from './accreditor-routing.module';
import { AccreHomeComponent } from './accre-home/accre-home.component';
import { AccreDashboardComponent } from './accre-dashboard/accre-dashboard.component';
import { AccreditorEditProfileComponent } from './accreditor-edit-profile/accreditor-edit-profile.component';


@NgModule({
  declarations: [
    AccreHomeComponent,
    AccreDashboardComponent,
    AccreditorEditProfileComponent
  ],
  imports: [
    CommonModule,
    AccreditorRoutingModule
  ]
})
export class AccreditorModule { }
