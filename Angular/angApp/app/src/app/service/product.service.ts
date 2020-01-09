import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
baseurl ="https://jsonplaceholder.typicode.com/comments"
  constructor( private http:HttpClient) { }
  
  getComment(){
   return this.http.get(this.baseurl).pipe(
   
   )

  }
  getCommentByID(id):Observable<any>{
    return this.http.get<any>(this.baseurl,id);
   }

 subjects = new BehaviorSubject<any>({});
 message = this.subjects.asObservable();

 onSelect(msg){ 
    this.subjects.next(msg)
 }

 getMessage(): Observable<any> {
  return this.subjects.asObservable();
}

}
