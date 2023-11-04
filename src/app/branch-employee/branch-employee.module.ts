import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';

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
    RouterModule.forChild(myRouting)
  ]
})
export class BranchEmployeeModule { }
