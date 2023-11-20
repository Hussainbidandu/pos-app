import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { addEmployees } from 'src/app/models/addEmployee';
import { AddEmployeeService } from 'src/app/services/add-employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
addEmployee:addEmployees;
constructor(private activateRoute:ActivatedRoute,private addEmployeeService:AddEmployeeService){
  this.addEmployee=new addEmployees();
}

ngOnInit(): void {
  let id=this.activateRoute.snapshot.params['id'];
  this.addEmployeeService.getAddEmployeebyId(id).subscribe((data)=>{
    console.log(data);
    this.addEmployee=data;
  })
}
//update employee
updateEmployee(form:any){
  console.log(this.addEmployee)
  this.addEmployeeService.updateAddEmployee(this.addEmployee).subscribe((data)=>{
    console.log(data,"updated employee details")
  })
}


}
