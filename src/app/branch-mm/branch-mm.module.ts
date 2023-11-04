import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

import { RouterModule, Routes } from '@angular/router';

const myRouting:Routes=[
  {path:'add-employee',component:AddEmployeeComponent}
]



@NgModule({
  declarations: [
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(myRouting)
  ]
})
export class BranchMMModule { }
