import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError,tap } from 'rxjs/operators';
import { map } from "rxjs/operators";
import { error } from '@angular/compiler/src/util';

let headers =  new HttpHeaders({ 'Content-Type': 'application/json' })
@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor(private http: HttpClient) { }
  sendData(data):Observable<any>{
    return this.http.post<any>('http://localhost:8082/api/reg',data, {headers:headers}).pipe(
      tap(_ => this.log()),
          // catchError(this.handleError(error) => {
          // })
    );
  }
 log(){
    console.log('log')
 }
 getData():Observable<any>{
    return this.http.get<any>('http://localhost:8082/api/user').pipe(
      tap(_ => this.log()),
    );
  }

sendLogin(data):Observable<any>{
return this.http.post('http://localhost:8082/api/signup',data,{headers:headers})
}
  protected myUrl ='/assets/city.json';
 getUser():Observable<any>{
  return this.http.get(this.myUrl).pipe(
  map((res)=>res)
  )}

 

 getmyApi(){
  return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
    tap(val =>  val)

  )
 }
 setSecureToken(setToken){
 localStorage.setItem('LoggedIn',setToken)

 }
 getSecureToken(){
  return localStorage.getItem('LoggedIn');

 }
 isLoggednIn(){
   return this.getSecureToken() !== null
  

 }

 
 }
