import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-parameter',
  templateUrl: './admin-parameter.component.html',
  styleUrls: ['./admin-parameter.component.css']
})
export class AdminParameterComponent implements OnInit {

  @Input('element') parameter!: { type: string; cardLabel: string; btnLabel: string; };
  
  constructor() { }

  ngOnInit(): void {
  }

}
