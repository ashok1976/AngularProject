import{Injectable} from '@angular/core'
import{HttpResponse,HttpHandler, HttpEvent, HttpInterceptor, HttpRequest} from '@angular/common/http';
import{ LoaderService} from './loader.service';
import{ observable} from 'rxjs';
import{ finalize} from 'rxjs/operators'

Injectable({
    providedIn : 'root'
})

export class loaderIntercept implements HttpInterceptor{
    constructor( private _loaderService:LoaderService){}
    intercept(req:HttpRequest<any>, next:HttpHandler){
    console.log(  this._loaderService.show(true))
        
        return next.handle(req).pipe(
           
                
           
            finalize(() => { 
               
                this._loaderService.show(false)
               
        
            })

        )
    }
}