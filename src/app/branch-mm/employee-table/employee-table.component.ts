import { Component, OnInit } from '@angular/core';
import { AddEmployeeService } from 'src/app/services/add-employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {
  addEmployees:any
constructor(private addEmployeeService:AddEmployeeService, private router:Router){}
ngOnInit(): void {
  this.addEmployeeService.viewAddEmployees().subscribe((data)=>{
    this.addEmployees=data;
    console.log(this.addEmployees);
  })
}
// delete

  deleteaddEmployee(id:any){
    this.addEmployeeService.deleteaddEmployee(id).subscribe((data)=>{
      console.log(data)
      this.router.navigateByUrl("/first", { skipLocationChange: true }).then(() =>{
        this.router.navigate(['add-employee'])
      })
    })
  }
  //edit employee details
  editaddEmployee(id:any){
    this.router.navigate(['branch-mm/edit-employee/'+id])
  }

}
