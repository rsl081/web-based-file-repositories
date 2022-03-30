import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-level-card',
  templateUrl: './admin-level-card.component.html',
  styleUrls: ['./admin-level-card.component.css']
})
export class AdminLevelCardComponent implements OnInit {

  @Input('element') level!: { type: string; cardLabel: string; btnLabel: string; };

  constructor() { }

  ngOnInit(): void {
  }

}
