import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorAlertMessageComponent } from './error-alert-message/error-alert-message.component';
import { DashboardAddCardComponent } from './dashboard-add-card/dashboard-add-card.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';

@NgModule({
  declarations: [
    ErrorAlertMessageComponent,
    DashboardCardComponent,
    DashboardAddCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ErrorAlertMessageComponent,
    DashboardAddCardComponent,
    DashboardCardComponent
  ]
})
export class SharedModule { }
