import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  implements CanActivate, CanActivateChild {
  constructor( private router:Router){}
  canActivate( next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var token = window.localStorage.getItem('token');
      if(!token){
        this.router.navigate([''])
       return false;       
      }

    return true;
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var token = window.localStorage.getItem('token');
    if(!token){
      this.router.navigate([''])
     return false;       
    }

  return true;

  } 


  
}
