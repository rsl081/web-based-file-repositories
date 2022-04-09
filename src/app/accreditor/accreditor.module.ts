import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccreditorRoutingModule } from './accreditor-routing.module';
import { AccreHomeComponent } from './accre-home/accre-home.component';
import { AccreDashboardComponent } from './accre-dashboard/accre-dashboard.component';


@NgModule({
  declarations: [
    AccreHomeComponent,
    AccreDashboardComponent
  ],
  imports: [
    CommonModule,
    AccreditorRoutingModule
  ]
})
export class AccreditorModule { }
