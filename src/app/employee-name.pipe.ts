import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeName'
})

//This method accepts an Employee Object.
export class EmployeeNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return 'The salary of ' +value.firstName+'  is '+ value.salary;
  }

}
