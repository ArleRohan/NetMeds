import { CanActivateFn, CanDeactivateFn, CanLoadFn, ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = sessionStorage.getItem('user');

  return isLoggedIn ? true : router.createUrlTree(['/auth/login']);
};

export const authCanLoadGuard: CanLoadFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = sessionStorage.getItem('user');
  console.log('canLoad called', sessionStorage.getItem('user'));

  return isLoggedIn ? true : router.createUrlTree(['/auth/login']);
};

export const authCanDeactivateGuard:CanDeactivateFn<CanComponentDeactivate> =(component)=>{
  return component.canDeactivate?component.canDeactivate():true
}

export interface CanComponentDeactivate{
  canDeactivate:()=>boolean| Observable<boolean>
}





