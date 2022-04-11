import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorAlertMessageComponent } from './error-alert-message/error-alert-message.component';
import { DashboardAddCardComponent } from './dashboard-add-card/dashboard-add-card.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { NavComponent } from './nav/nav.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { DashboardDialogComponent } from './dashboard-dialog/dashboard-dialog.component';
import { OverlayComponent } from './overlay/overlay.component';


@NgModule({
  declarations: [
    ErrorAlertMessageComponent,
    DashboardCardComponent,
    DashboardAddCardComponent,
    BreadcrumbComponent,
    NavComponent,
    HamburgerMenuComponent,
    DashboardDialogComponent,
    OverlayComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule
  ],
  exports: [
    ErrorAlertMessageComponent,
    DashboardAddCardComponent,
    DashboardCardComponent,
    BreadcrumbComponent,
    NavComponent,
    HamburgerMenuComponent,
    DashboardDialogComponent,
    OverlayComponent,
  ]
})
export class SharedModule { }
