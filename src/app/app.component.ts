import { Component } from '@angular/core';
import {StocksCompoent} from './stocks.component';
import{FormsModule} from '@angular/forms';

class Employee{

  firstName: string;
  lastName: string;
  salary: number;

  constructor (firstName, lastName, salary){
    this.firstName= firstName;
    this.lastName= lastName;
    this.salary=salary;
  }
}


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  firstName='jon';

  employee: Employee= new Employee('John', 'Smith', 10000);
}

