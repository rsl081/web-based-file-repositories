import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorAlertMessageComponent } from './error-alert-message/error-alert-message.component';
import { DashboardCardComponentComponent } from './dashboard-card-component/dashboard-card-component.component';
import { DashboardAddCardComponentComponent } from './dashboard-add-card-component/dashboard-add-card-component.component';


@NgModule({
  declarations: [
    ErrorAlertMessageComponent,
    DashboardCardComponentComponent,
    DashboardAddCardComponentComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ErrorAlertMessageComponent,
    DashboardAddCardComponentComponent,
    DashboardCardComponentComponent
  ]
})
export class SharedModule { }
