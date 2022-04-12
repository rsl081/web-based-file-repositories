import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accre-area',
  templateUrl: './accre-area.component.html',
  styleUrls: ['./accre-area.component.css']
})
export class AccreAreaComponent implements OnInit {

  areas = [
    {
      type: 'area',
      cardLabel: 'Area 1: Faculty',
      btnLabel: 'View Parameter',
    },
    {
      type: 'area',
      cardLabel: 'Area 2: Faculty',
      btnLabel: 'View Parameter',
    },
    {
      type: 'area',
      cardLabel: 'Area 3: Faculty',
      btnLabel: 'View Parameter',
    },
    {
      type: 'area',
      cardLabel: 'Area 4: Faculty',
      btnLabel: 'View Parameter',
    },
    {
      type: 'area',
      cardLabel: 'Area 5: Faculty',
      btnLabel: 'View Parameter',
    },
    {
      type: 'area',
      cardLabel: 'Area 6: Faculty',
      btnLabel: 'View Parameter',
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
