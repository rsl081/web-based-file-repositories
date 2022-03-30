import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    AdminModule,
    UserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
