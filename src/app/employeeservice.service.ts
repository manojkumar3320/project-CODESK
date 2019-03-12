import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  employeeList: Employee[] = [];

employeeAdded = new Subject();

setItem({
  key,
  value
}: {
  key: string,
  value: any
}) {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
}

getItem(key: any): Promise<Employee[]> {
  return new Promise((resolve, reject) => {
    try {
      const value = localStorage.getItem(key);
      (typeof value === 'string' || value === null) ? resolve(JSON.parse(value === null ? '[]' : value)) : reject(false);
    } catch (error) {
      reject(error);
    }
  });
}
async add(employeeList: Employee) {
  this.employeeList = await this.getItem('codesk');


  this.employeeList.push(employeeList);
  const isAdded = await this.setItem({
    key: 'codesk',
    value: this.employeeList
  });

  this.employeeAdded.next(this.employeeList);
}


  constructor() { }
}
