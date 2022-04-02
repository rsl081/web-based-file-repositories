import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-level',
  templateUrl: './admin-level.component.html',
  styleUrls: ['./admin-level.component.css']
})
export class AdminLevelComponent implements OnInit {

  @Input('element') level!: { type: string; cardLabel: string; btnLabel: string; };

  constructor() { }

  ngOnInit(): void {
  }

}
