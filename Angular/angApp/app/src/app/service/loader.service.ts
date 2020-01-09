import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { share } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  constructor() { }
  public isLoading = new BehaviorSubject<boolean>(false);
  loaderState = this.isLoading.asObservable();
  show(val:boolean){
    this.isLoading.next(val)
   
  
  }
 /*  hide(val:boolean){
    this.isLoading.next(val)
    
  }  */ 

 //console.log('dfdfdfdf')
}
