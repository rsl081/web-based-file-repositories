import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accre-home',
  templateUrl: './accre-home.component.html',
  styleUrls: ['./accre-home.component.css']
})
export class AccreHomeComponent implements OnInit {

  userName = 'Hi, Accreditor'
  constructor() { }

  ngOnInit(): void {
  }

}
