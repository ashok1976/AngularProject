import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{retry, catchError,map} from 'rxjs/operators'
import{ throwError, Observer, BehaviorSubject} from 'rxjs'
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json; charset=utf-8',
   })};
   export interface User {
    name:string,
    userid:string,
    email:any,
    role:string
}

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { 
  }
sendData(data:User):Observable<any>{
    return this.http.post<any>("http://localhost:3000/api/signup",data).pipe(
         catchError(this.handleError))
      }

loginData(val):Observable<any>{
  return this.http.post<any>('http://localhost:3000/api/login',val).pipe(
    catchError(this.handleError)
  )

 

}
logout(status){
return this.http.post<any>('http://localhost:3000/api/logout',status).pipe(
  catchError(this.handleError)
)
  
}


private isAdmin =  new BehaviorSubject<boolean>(false);
navData = this.isAdmin.asObservable()
changeNavigation(data){
       this.isAdmin.next(data)
  }
   
handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {// client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else{// server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
      } 
}
