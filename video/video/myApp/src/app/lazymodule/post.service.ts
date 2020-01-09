import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getViewData } from '@angular/core/src/render3/instructions';
import { filter, map } from 'rxjs/operators';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor( private http:HttpClient) {

   }

   baseUrl ="https://jsonplaceholder.typicode.com/posts"
   

  getViewData(){
    return this.http.get(this.baseUrl).pipe(
      tap(el => el),
     // map(data => data.json())
    )
   }
   getDataid(id,title,body){
    return this.http.get(`${this.baseUrl}/${id},${title},${body}`)

   }

}
