import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty-area',
  templateUrl: './faculty-area.component.html',
  styleUrls: ['./faculty-area.component.css']
})
export class FacultyAreaComponent implements OnInit {

  @Input('element') area!: { type: string; cardLabel: string; btnLabel: string; };
  
  constructor() { }

  ngOnInit(): void {
  }

}
