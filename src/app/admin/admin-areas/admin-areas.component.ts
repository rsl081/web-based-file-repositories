import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-areas',
  templateUrl: './admin-areas.component.html',
  styleUrls: ['./admin-areas.component.css']
})
export class AdminAreasComponent implements OnInit {

  areas = [
    {
      type: "area",
      cardLabel: "Area 1: Missions, Goals, and Objectives",
      btnLabel : "View Parameter"
    },
    {
      type: "area",
      cardLabel: "Area 2: Faculty",
      btnLabel : "View Parameter"
    },
    {
      type: "area",
      cardLabel: "Area 3: Curriculum and Instruction",
      btnLabel : "View Parameter"
    },
    {
      type: "area",
      cardLabel: "Area 4: Students",
      btnLabel : "View Parameter"
    },
    {
      type: "area",
      cardLabel: "Area 5: Research",
      btnLabel : "View Parameter"
    },
    {
      type: "area",
      cardLabel: "Area 6: Extension and Community Involvement",
      btnLabel : "View Parameter"
    },
    {
      type: "area",
      cardLabel: "Area 7: Library",
      btnLabel : "View Parameter"
    },
     {
      type: "area",
      cardLabel: "Area 8: Physical Facilities",
      btnLabel : "View Parameter"
    },
    {
      type: "area",
      cardLabel: "Area 9: Laboratories",
      btnLabel : "View Parameter"
    },
    {
      type: "area",
      cardLabel: "Area 10: Administration",
      btnLabel : "View Parameter"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
