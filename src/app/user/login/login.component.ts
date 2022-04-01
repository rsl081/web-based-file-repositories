import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  isPulse = false;

  credentials = {
    email: '',
    password: '',
  };

  titles = [
    { user: 'admin', active: true },
    { user: 'faculty', active: false },
    { user: 'accreditor', active: false },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleBtn(user: string) {
    this.isPulse = true

    this.credentials.email = ''
    this.credentials.password = ''

    this.titles.forEach((element, index) => {
      if (element.user === user) {
        element.active = true;
      } else {
        element.active = false;
      }
    });
  }
  
  setActiveTabToFalse() {
    this.isPulse = false
    console.log(this.isPulse)
  }

  getActiveTab(): Boolean {
    return this.isPulse;
  }
}
