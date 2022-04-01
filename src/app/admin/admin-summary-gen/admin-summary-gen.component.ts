import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-summary-gen',
  templateUrl: './admin-summary-gen.component.html',
  styleUrls: ['./admin-summary-gen.component.css'],
})
export class AdminSummaryGenComponent implements OnInit {

  // dummy data only - might be changed once the backend is ready
  parameterName = 'Summary Of Files';
  fileArray = [
    { faculty: 'Mr. Jose', fileName: 'Faculty Test File.pdf', size: '100kb', relase: 'pokay' },
    { faculty: 'Mr. Juan', fileName: 'Faculty Test File 2.pdf', size: '120kb' },
    { faculty: 'Mr. Juan', fileName: 'Faculty Test File 3.pdf', size: '110kb' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
