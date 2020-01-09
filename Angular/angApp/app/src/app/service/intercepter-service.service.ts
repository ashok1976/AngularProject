import { Injectable } from '@angular/core';
import{HttpInterceptor,HttpResponse, HttpRequest,HttpEvent, HttpHandler} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,tap,finalize } from 'rxjs/operators';
import { ProductService} from './product.service'

@Injectable({
  providedIn: 'root'
})
@Injectable()

export class IntercepterServiceService implements HttpInterceptor{
      intercept(request:HttpRequest<any>, next:HttpHandler){
        const token = localStorage.getItem('token');
        var newHeader = request.headers;
        if(token){
            const token = localStorage.getItem('token');
            newHeader = newHeader.append('Author-myHeader', token);
      }
      
          var reqHeadr = request.clone({headers: newHeader})
        return next.handle(reqHeadr).pipe(
          tap(event => {
              if(event instanceof HttpResponse){
                console.log(" all looks good "+event.status);

              }
          
          },error =>{

            
	          	console.log("----response----");
	          	console.error("status code:");
	          	console.error(error.status);
	          	console.error(error.message);
	          	console.log("--- end of response---");
          }
          
          )

        )
   }
}
