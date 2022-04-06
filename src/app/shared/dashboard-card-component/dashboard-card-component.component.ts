import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-card-component',
  templateUrl: './dashboard-card-component.component.html',
  styleUrls: ['./dashboard-card-component.component.css']
})
export class DashboardCardComponentComponent implements OnInit {

    // receiving card property from parent element admin-level-card
  @Input() card!: { type: string; cardLabel: string; btnLabel: string; };
  
  constructor() { }

  ngOnInit(): void {
  }

}
