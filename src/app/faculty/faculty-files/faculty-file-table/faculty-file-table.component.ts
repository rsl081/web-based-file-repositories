import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty-file-table',
  templateUrl: './faculty-file-table.component.html',
  styleUrls: ['./faculty-file-table.component.css'],
})
export class FacultyFileTableComponent implements OnInit {

  @Input() files!: any;

  constructor() {}

  ngOnInit(): void {}
}
