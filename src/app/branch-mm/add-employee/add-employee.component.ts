import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import {  employees } from 'src/app/models/employee';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit{
  employeeForm:FormGroup;
  protected formSubmitted: boolean=false;
  constructor(private formBuilder:FormBuilder,private employeeService:EmployeeService){}

  ngOnInit(): void {
    this.employeeForm=this.formBuilder.group({
      id:new FormControl(null,[Validators.required]),
      name:new FormControl(null,[Validators.required]),
      role:new FormControl(null,[Validators.required]),
      phonenumber:new FormControl(null,[Validators.required,Validators.pattern(/^[6-9]{1}[0-9]{9}$/)]),
      userId : new FormControl(null, [Validators.required]),
      password : new FormControl(null, [Validators.required])
    })
  }
  addEmployee(){
    this.formSubmitted=true;
    const employeeData:employees={
      id:this.employeeForm.controls['id'].value,
      name:this.employeeForm.controls['name'].value,
      role:this.employeeForm.controls['role'].value,
      phonenumber:this.employeeForm.controls['phonenumber'].value,
      userId: this.employeeForm.controls['userId'].value,
      password: this.employeeForm.controls['password'].value
      
    }
    console.log(employeeData,"employee form Data")
    this.employeeService.addEmployee(employeeData).subscribe((data)=>{
      console.log(data)
      this.employeeForm.reset();
    })
  }
  
  }



