import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard-cards',
  templateUrl: './admin-dashboard-cards.component.html',
  styleUrls: ['./admin-dashboard-cards.component.css']
})
export class AdminDashboardCardsComponent implements OnInit {

  // dummy data only - might be changed once the backend is ready
  route = "level";
  cards = [
    {
      type: "level",
      cardLabel: "Level 1 - Phase 4",
      btnLabel : "View Area"
    },
    {
      type: "level",
      cardLabel: "Level 2 - Phase 4",
      btnLabel : "View Area"
    },
    {
      type: "level",
      cardLabel: "Level 3 - Phase 4",
      btnLabel : "View Area"
    },
    {
      type: "level",
      cardLabel: "Level 4 - Phase 4",
      btnLabel : "View Area"
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
