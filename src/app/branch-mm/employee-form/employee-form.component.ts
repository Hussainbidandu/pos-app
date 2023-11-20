import { Component } from '@angular/core';
import { addEmployees } from 'src/app/models/addEmployee';
import { AddEmployeeService } from 'src/app/services/add-employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {

  
  addEmployee:addEmployees;

  constructor(private addEmployeeService: AddEmployeeService ) {
    this.addEmployee = new addEmployees();
  }

  onSubmit(form: any): any {
    

    console.log(form)
      console.log(this.addEmployee)
      this.addEmployeeService.addEmployee(this.addEmployee).subscribe((data) => {
        console.log(data)
      })

    }
  }
