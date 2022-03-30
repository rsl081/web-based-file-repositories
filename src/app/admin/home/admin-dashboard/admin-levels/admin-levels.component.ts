import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-levels',
  templateUrl: './admin-levels.component.html',
  styleUrls: ['./admin-levels.component.css']
})
export class AdminLevelsComponent implements OnInit {

  // dummy data only - might be changed once the backend is ready
  levels = [
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
