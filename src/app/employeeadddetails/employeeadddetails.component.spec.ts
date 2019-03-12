import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeadddetailsComponent } from './employeeadddetails.component';

describe('EmployeeadddetailsComponent', () => {
  let component: EmployeeadddetailsComponent;
  let fixture: ComponentFixture<EmployeeadddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeadddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeadddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
