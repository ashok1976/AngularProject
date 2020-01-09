import { Component, Input } from '@angular/core';
import{  ServiceService} from './service/service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() singVal:boolean;
  title = 'app';

constructor( private _service:ServiceService){


}

ngOnInit(){




 
}
getsignVal(event){
this.singVal = event

}

}
