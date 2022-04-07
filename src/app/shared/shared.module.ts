import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorAlertMessageComponent } from './error-alert-message/error-alert-message.component';


@NgModule({
  declarations: [
    ErrorAlertMessageComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [ErrorAlertMessageComponent]
})
export class SharedModule { }
