import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard-card',
  templateUrl: './admin-dashboard-card.component.html',
  styleUrls: ['./admin-dashboard-card.component.css']
})
export class AdminDashboardCardComponent implements OnInit {

   @Input('element') card!: { type: string; cardLabel: string; btnLabel: string; };
  
  constructor() { }

  ngOnInit(): void {
  }

}
