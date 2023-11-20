import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {  ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { RouterModule, Routes } from '@angular/router';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

const myRouting:Routes=[
  {path:'add-employee',component:AddEmployeeComponent},
  {path:'employeeTable',component:EmployeeTableComponent},
  {path:'edit-employee/:id',component:EditEmployeeComponent},
  {path:'employeeform',component:EmployeeFormComponent}
]



@NgModule({
  declarations: [
    AddEmployeeComponent,
    EmployeeTableComponent,
    EditEmployeeComponent,
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    
    RouterModule.forChild(myRouting)
  ]
})
export class BranchMMModule { }
