import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pos-app';

  constructor(private router: Router) { }

  

  ngOnInit(): void {
    console.log(sessionStorage.getItem('role'))
  }

  get isAdmin() {
    return sessionStorage.getItem('role') === 'admin'
  }
  get isBM(){
    return sessionStorage.getItem('role')==='branchmanager'
  }
  get isBE(){
    return sessionStorage.getItem('role') ==='branchemployee'
  }
  
  get isLogin() {
    return sessionStorage.getItem('isLoggedIn') === 'true'
  }
  logout() {
    sessionStorage.clear();
    this.router.navigate(['login'])
  }


  navigateHome() {
    this.router.navigate(['home'])
  }
  navigateAbout() {
    this.router.navigate(['about-us'])
  }
  navigateContact() {
    this.router.navigate(['contact-us'])
  }
  

 
  navigateAdmin() {
    this.router.navigate(['admin/product']) //product list
  }
  navigateBranchManager() {
    this.router.navigate(['branch-mm/add-employee'])
  }
  navigateBranchEmployee() {
    this.router.navigate(['branch-employee/user-profile'])
  }
 login(){
  this.router.navigate(['login'])
 }
  navigateEdit() {
    this.router.navigate(['admin/edit']) //edit product
  }
  navigateUsers(){
    this.router.navigate(['admin/users']) //user list
  }
  navigateBMET(){
    this.router.navigate(['branch-mm/employeeTable'])
  }

  navigateEditEmp(){
    this.router.navigate(['branch-mm/edit-employee'])
  }
  navigateProForm(){
    this.router.navigate(['admin/productform']) // product form
  }
  navigateEmpForm(){
    this.router.navigate(['branch-mm/employeeform'])
  }
  navigateUserForm(){
    this.router.navigate(['admin/userform']) //user form
  }
  navigateViewUsers(){
    this.router.navigate(['admin/viewusers']) //view users list by role
  }
  navigateEditView(){
    this.router.navigate(['admin/editview']) // edit view users
  }

  navigateContactUs(){
    this.router.navigate(['admin/contact'])
  }

  
  navigateContactList(){
    this.router.navigate(['admin/contactlist'])
  }
}


