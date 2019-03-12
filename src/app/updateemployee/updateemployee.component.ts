import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {
  updateEmployeeForm: FormGroup;
  generatedID: number = null;
  employeesList = [];
  
  constructor() {}
  
  ngOnInit() {
  this.createForm();
  }
  
  createForm() {
      this.updateEmployeeForm = new FormGroup({
        'firstname': new FormControl(null, Validators.required),
        'lastname': new FormControl(null, Validators.required),
        'emailInput': new FormControl('', [Validators.required, Validators.email]),
        'phone': new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10)]),
        'imageurl': new FormControl('', Validators.required)
  });
  }
  
  get updateForm() {
  return this.updateEmployeeForm.controls;
  }
  
  onSubmit() {
  const employee = this.updateEmployeeForm.value;
  this.generatedID = Math.floor(100000 + Math.random() * 900000);
  this.employeesList.push(employee);
  }
 
}
