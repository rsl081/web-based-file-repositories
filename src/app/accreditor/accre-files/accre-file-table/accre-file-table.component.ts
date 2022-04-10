import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accre-file-table',
  templateUrl: './accre-file-table.component.html',
  styleUrls: ['./accre-file-table.component.css']
})
export class AccreFileTableComponent implements OnInit {

  @Input() files!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
