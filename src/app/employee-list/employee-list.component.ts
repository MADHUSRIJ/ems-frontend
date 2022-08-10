import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];

  constructor() { }

  ngOnInit(): void {
    this.employees = [
      {
        "id": 1,
        "firstName": "Madhu",
        "lastName": "J",
        "emailId": "srimadhu.j@gmail.com"
    },
    {
        "id": 2,
        "firstName": "Nithin",
        "lastName": "J",
        "emailId": "nithinraaj@gmail.com"
    }
    ];
  }

}
