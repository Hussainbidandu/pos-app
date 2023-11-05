import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

//components
import { ProductComponent } from './product/product.component';
import {products} from '../models/product'

const myRouting:Routes=[
  {path:'product',component:ProductComponent}
]



@NgModule({
  declarations: [
    ProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(myRouting)
  ]
})
export class AdminModule { }
