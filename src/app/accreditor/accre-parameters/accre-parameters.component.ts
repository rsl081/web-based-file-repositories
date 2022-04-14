import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accre-parameters',
  templateUrl: './accre-parameters.component.html',
  styleUrls: ['./accre-parameters.component.css']
})
export class AccreParametersComponent implements OnInit {

  // dummy data only - might be changed once the backend is ready
  parameters = [
    {
      type: "parameter",
      cardLabel: "Parameter A",
      btnLabel : "View File"
    },
    {
      type: "parameter",
      cardLabel: "Parameter B",
      btnLabel : "View File"
    },
    {
      type: "parameter",
      cardLabel: "Parameter C",
      btnLabel : "View File"
    },
    {
      type: "parameter",
      cardLabel: "Parameter D",
      btnLabel : "View File"
    },
    {
      type: "parameter",
      cardLabel: "Parameter E",
      btnLabel : "View File"
    },
    {
      type: "parameter",
      cardLabel: "Parameter F",
      btnLabel : "View File"
    },
    {
      type: "parameter",
      cardLabel: "Parameter G",
      btnLabel : "View File"
    },
     {
      type: "parameter",
      cardLabel: "Parameter H",
      btnLabel : "View File"
    },
    {
      type: "parameter",
      cardLabel: "Parameter I",
      btnLabel : "View File"
    },
    {
      type: "parameter",
      cardLabel: "Parameter J",
      btnLabel : "View File"
    }
  ]

  
  constructor() { }
  ngOnInit(): void {
  }

}
