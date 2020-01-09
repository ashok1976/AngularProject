import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
url ="https://api.github.com/search/repositories?q=topic:ruby+topic:rails"
  constructor(private https:HttpClient) { }

public behave = new BehaviorSubject('hi')
public behaves = this.behave.asObservable();
setBehave(data){
  this.behave.next(data);
}

getData(){
  return this.https.get(this.url)
}

}
