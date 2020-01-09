import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router'
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceGuard implements CanActivate{
  constructor(private router: Router ){
 }

 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var  token =  window.localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['login']);
      return false;
    }
    
     return true
  }
  
}
