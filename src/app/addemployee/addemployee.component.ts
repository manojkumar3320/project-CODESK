import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeserviceService } from '../employeeservice.service';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  addEmployeeForm: FormGroup;
generatedID: number = null;
employeesList = [];


constructor(private addFetchemployee: EmployeeserviceService  ) {}

ngOnInit() {
this.createForm();
}

createForm() {
this.addEmployeeForm = new FormGroup({
firstname : new FormControl(null, Validators.required),
lastname : new FormControl(null, Validators.required),
emailInput : new FormControl(null, [Validators.required, Validators.email]),
phone : new FormControl(null, [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10)]),
imageurl : new FormControl(null, Validators.required),
description : new FormControl(null, Validators.required)
});
}

get addForm() {
return this.addEmployeeForm.controls;
}

onSubmit() {
const employee = this.addEmployeeForm.value;
console.log(employee);
this.generatedID = Math.floor(100000 + Math.random() * 900000);
this.employeesList.push(employee);
this.addFetchemployee.add(employee);
}

}
