import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminDashboardCardsComponent } from './admin-dashboard/admin-dashboard-cards/admin-dashboard-cards.component';
import { AdminDashboardAddCardComponent } from './admin-dashboard/admin-dashboard-cards/admin-dashboard-add-card/admin-dashboard-add-card.component';
import { AdminDashboardCardComponent } from './admin-dashboard/admin-dashboard-cards/admin-dashboard-card/admin-dashboard-card.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { AdminParameterComponent } from './admin-parameter/admin-parameter.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    AdminDashboardCardsComponent,
    AdminDashboardAddCardComponent,
    AdminDashboardCardComponent,
    AdminParameterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
