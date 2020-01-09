import { Injectable, } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{ serviceUser} from './../loginpopup/form/user'
import { Observable,throwError,BehaviorSubject, of  } from 'rxjs';
import{retry, catchError,map} from 'rxjs/operators'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json; charset=utf-8',
   })};







@Injectable({  providedIn: 'root'})
export class ServiceService {
constructor(private http:HttpClient) {}
  sendData(data:serviceUser) : Observable<any>{
   let body = JSON.stringify(data);
  return this.http.post<any>("http://localhost:3000/api/signup",data, httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
      )
   }
sendLogin(data): Observable<any>{
  return this.http.post<any>("http://localhost:3000/login", data).pipe(
      catchError(this.handleError)
 )
}

logOut(status):Observable<any>{
 return this.http.get<any>('http://localhost:3000/logout',status)
}

handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else{
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

post="https://jsonplaceholder.typicode.com/posts"
getPost(){
  return this.http.get(this.post);

}
private messageSource = new BehaviorSubject<boolean>(true);
currentMessage = this.messageSource.asObservable();
changeMessage(message:boolean){
    this.messageSource.next(message)
}










}

  //https://www.dotnetcurry.com/angularjs/1438/http-client-angular
  //https://appdividend.com/2018/01/21/angular-5-crud-tutorial-example-scratch/
