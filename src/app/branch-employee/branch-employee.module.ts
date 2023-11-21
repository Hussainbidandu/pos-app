import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';

import {  ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatButtonModule} from '@angular/material/button';

import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';


import {HttpClientModule} from '@angular/common/http';




import { RouterModule, Routes } from '@angular/router';
import { UserprofileListComponent } from './userprofile-list/userprofile-list.component';
import { CreateOrdersComponent } from './create-orders/create-orders.component';
 const myRouting :Routes= [
  
  {path:'user-profile',component:UserProfileComponent},
  {path:'userlist',component:UserprofileListComponent},
  {path:'orders',component:CreateOrdersComponent}
 ]



@NgModule({
  declarations: [
    UserProfileComponent,
    UserprofileListComponent,
    CreateOrdersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    HttpClientModule,
    RouterModule.forChild(myRouting)
  ]
})
export class BranchEmployeeModule { }
