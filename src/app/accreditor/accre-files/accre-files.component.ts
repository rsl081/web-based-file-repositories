import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accre-files',
  templateUrl: './accre-files.component.html',
  styleUrls: ['./accre-files.component.css']
})
export class AccreFilesComponent implements OnInit {

  parameterName = 'Parameter A';
  fileArray = [
    { faculty: 'Mr. Jose', fileName: 'vision.pdf', size: '5mb' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
