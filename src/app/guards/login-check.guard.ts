import { CanActivateFn } from '@angular/router';
import {  Router } from '@angular/router';
import { inject } from '@angular/core';



export const loginCheckGuard: CanActivateFn = (route, state) => {
  
  const isLogin=sessionStorage.getItem('isLoggedIn');
  const router=inject(Router)
  if(isLogin){
    return false;
  }
  else{
    router.navigate(['login']);
    return false;
  }
};
