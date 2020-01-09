import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseURL ="https://jsonplaceholder.typicode.com/comments/"
  constructor( private http:HttpClient) {   }
  getApiData(){
     return this.http.get(this.baseURL)
   }
   getDataByID(id: any){
     return this.http.get(this.baseURL+id)
   }
   isChiidActivate():boolean{
     return false;
   }

}
