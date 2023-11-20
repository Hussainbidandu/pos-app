import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

//components
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';


import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import {products} from '../models/product';

import { EditPComponent } from './edit-p/edit-p.component';
import { UsersComponent } from './users/users.component';
import { ProductformComponent } from './productform/productform.component';
import { UserformComponent } from './userform/userform.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { EditviewComponent } from './editview/editview.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ConctactlistComponent } from './conctactlist/conctactlist.component';


const myRouting:Routes=[
  {path:'productform',component:ProductformComponent},
  {path:'userform',component:UserformComponent},
  {path:'product',component:ProductComponent},
  {path:'edit/:id',component:EditPComponent},
  {path:'users',component:UsersComponent},
  {path:'viewusers',component:ViewusersComponent},
  {path:'editview/:id',component:EditviewComponent},
  {path:'contact',component:ContactFormComponent},
  {path:'contactlist',component:ConctactlistComponent}

]




@NgModule({
  declarations: [
    ProductComponent,
    EditPComponent,
    ProductformComponent,
    UserformComponent,
    ViewusersComponent,
    EditviewComponent,
    ContactFormComponent,
    ConctactlistComponent,
  
  
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    RouterModule.forChild(myRouting)
  ]
})
export class AdminModule { }
