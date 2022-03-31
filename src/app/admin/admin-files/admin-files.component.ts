import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-files',
  templateUrl: './admin-files.component.html',
  styleUrls: ['./admin-files.component.css']
})
export class AdminFilesComponent implements OnInit {

  // dummy data only - might be changed once the backend is ready
  parameterName = "Parameter A";
  fileArray = [
    {faculty: "Mr. Jose", fileName: "Faculty Test File.pdf", size: "100kb" },
    {faculty: "Mr. Juan", fileName: "Faculty Test File 2.pdf", size: "120kb" },
    {faculty: "Mr. Juan", fileName: "Faculty Test File 3.pdf", size: "110kb" }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
