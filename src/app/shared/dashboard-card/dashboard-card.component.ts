import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css'],
})
export class DashboardCardComponent implements OnInit {
  // receiving card property from parent element admin-level-card
  @Input() card!: { type: string; cardLabel: string; btnLabel: string };
  @Input() index = 0;
  @Input() levels = [{}]

  constructor() {}

  ngOnInit(): void {}

  onDeleteItem() {
    this.levels.splice(this.index, 1);
  }

}
