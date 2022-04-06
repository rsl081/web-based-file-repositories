import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-alert-message',
  templateUrl: './error-alert-message.component.html',
  styleUrls: ['./error-alert-message.component.css']
})
export class ErrorAlertMessageComponent implements OnInit {

  showAlert = true;
  alertTitle = "Atention";
  alertMessage = "Restricted files. You cannot edit here."
  
  constructor() { }

  ngOnInit(): void {
  }

  onCloseAlert(){
    this.showAlert = !this.showAlert;
  }

}
