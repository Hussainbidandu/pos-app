import { CanDeactivateFn } from '@angular/router';

export const deactivateGuard: CanDeactivateFn<unknown> = (component:any, currentRoute, currentState, nextState) => {
  console.log(component)
  if(component.admin) {
    const confirmation = confirm("Are you sure you want to naviagte?");
    if(confirmation) {
      return true;
    } else {
      return false;
    }
  }
  return true;
};
