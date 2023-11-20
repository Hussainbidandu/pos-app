import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';




import { RouterModule, Routes } from '@angular/router';
 const myRouting :Routes= [
  
  {path:'user-profile',component:UserProfileComponent}
 ]



@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    RouterModule.forChild(myRouting)
  ]
})
export class BranchEmployeeModule { }
