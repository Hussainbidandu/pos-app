// import { NgModule } from '@angular/core';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { loginCheckGuard } from './guards/login-check.guard';
import { deactivateGuard } from './guards/deactivate.guard';




const routes: Routes = [
  {path:'home',component:HomeComponent,canActivate:[loginCheckGuard],canDeactivate:[deactivateGuard]},
  {path: 'about-us',component:AboutUsComponent},
  {path:'contact-us',component:ContactComponent},
  {path:'login',component:LoginComponent},

  {
    path: 'admin',  loadChildren: () => import('../app/admin/admin.module')
    .then(m => m.AdminModule)
  },
  {
    path: 'branch-mm', loadChildren: () => import('../app/branch-mm/branch-mm.module')
    .then(m => m.BranchMMModule)
  },
  
 {
  path:'branch-employee',loadChildren :() =>import('../app/branch-employee/branch-employee.module')
  .then(m => m.BranchEmployeeModule)
 }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
