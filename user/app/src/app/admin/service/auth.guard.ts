import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,
   CanActivateChild, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import{ AdminService} from './admin.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild,CanLoad {
  constructor(private adminService:AdminService){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
   let url:string = state.url;
   alert()
   console.log(url)
    return true;

  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url:string = state.url;
    console.log(url)

    return true;
  }  
  canLoad(route:Route):boolean{
    return true

  }


  
}
