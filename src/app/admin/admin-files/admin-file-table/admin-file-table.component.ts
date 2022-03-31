import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-file-table',
  templateUrl: './admin-file-table.component.html',
  styleUrls: ['./admin-file-table.component.css']
})
export class AdminFileTableComponent implements OnInit {

  @Input() files!: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
