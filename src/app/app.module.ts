import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminDashboardCardsComponent } from './admin-dashboard/admin-dashboard-cards/admin-dashboard-cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLevelCardComponent } from './admin-dashboard/admin-dashboard-cards/admin-level-card/admin-level-card.component';
import { AdminDashboardCardComponent } from './shared/admin-dashboard-card/admin-dashboard-card.component';
import { AdminDashboardAddCardComponent } from './shared/admin-dashboard-add-card/admin-dashboard-add-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    AdminDashboardCardsComponent,
    AdminDashboardAddCardComponent,
    AdminDashboardCardComponent,
    AdminLevelCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    UserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
