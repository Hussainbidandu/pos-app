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

navigateHome(){
  this.router.navigate(['home'])
}
navigateAbout(){
  this.router.navigate(['about-us'])
}
navigateContact(){
  this.router.navigate(['contact-us'])
}

// navigateLogin(){
//   this.router.navigate(['login'])
// }
navigateAdmin(){
  this.router.navigate(['admin/product'])
}
navigateBranchManager(){
  this.router.navigate(['branch-mm/add-employee'])
}
navigateBranchEmployee(){
  this.router.navigate(['branch-employee/user-profile'])
}
login(){
  this.router.navigate(['login'])
}




}


