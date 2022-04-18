import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css'],
})
export class DashboardCardComponent implements OnInit {
  @Input() card!: { type: string; cardLabel: string; btnLabel: string };
  @Input() index = 0;
  @Input() levels = [{}]
  @Input() nextRoute?: string;

  // ActivatedRoute simply injects the currently active route
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  onClick(){
    // navigate to the next route relative to the current route 
    this.router.navigate([this.nextRoute], {relativeTo: this.route});
  }

  onDeleteItem() {
    this.levels.splice(this.index, 1);
  }

}
