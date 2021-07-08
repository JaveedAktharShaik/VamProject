import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeepipe'
})
export class EmployeePipe implements PipeTransform {

  transform(value: any, filteredString: string) {
    if (filteredString === '') {
      return value;
    }
    const empArr = [];
    for (const emp of value) {
      if (emp.empName.includes(filteredString)) {
        empArr.push(emp);
      }
    }
    return empArr;
  }
}