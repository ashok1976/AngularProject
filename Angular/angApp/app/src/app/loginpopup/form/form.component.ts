import { Component, OnInit, Input, ViewContainerRef, Output, ComponentFactoryResolver, OnDestroy, ViewChild, ElementRef, Renderer2, AfterViewInit, EventEmitter } from '@angular/core';
import{ NgForm} from '@angular/forms'
import{ ServiceService} from './../../service/service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
showForm:boolean = true;
@Output() showFormChange = new EventEmitter();
 model = {
    firstname:'ASHOK',
    lastname:'Panthari',
    email:'ashok.its@gmail.com',
    password:'',
    street:'57A, Shakti khnad I',
    zip:201014,
    city:'Indirapuram, Ghaziabad'

}

constructor(private router:Router,
private _service:ServiceService){ }


ngOnInit(){ }








    

  onSubmit(myForm:NgForm){
     this._service.sendData(myForm.value).subscribe(data=>{   
        console.log(data) 
        
      });
    
      this.showFormChange.emit(this.showForm = false);
      this.router.navigate(['/product']);
     
    }





}
