import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminDashboardCardsComponent } from './admin-dashboard/admin-dashboard-cards/admin-dashboard-cards.component';
import { AdminDashboardAddCardComponent } from './admin-dashboard/admin-dashboard-cards/admin-dashboard-add-card/admin-dashboard-add-card.component';
import { AdminDashboardCardComponent } from './admin-dashboard/admin-dashboard-cards/admin-dashboard-card/admin-dashboard-card.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    AdminDashboardCardsComponent,
    AdminDashboardAddCardComponent,
    AdminDashboardCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    UserModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
