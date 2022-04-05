import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-area',
  templateUrl: './admin-area.component.html',
  styleUrls: ['./admin-area.component.css']
})
export class AdminAreaComponent implements OnInit {

  @Input('element') area!: { type: string; cardLabel: string; btnLabel: string; };

  constructor() { }

  ngOnInit(): void {
  }

}
