import { Component, OnInit, ElementRef, ViewContainerRef, ViewChild, Renderer2 } from '@angular/core';
import { ServiceService} from './../service/service.service'
@Component({
  selector: 'app-loginpopup',
  templateUrl: './loginpopup.component.html',
  styleUrls: ['./loginpopup.component.css']
})
export class LoginpopupComponent implements OnInit {
  _refDynamicPopup:any;
  tabs;
  showForm:boolean = true
@ViewChild('FormComponent', {read: ViewContainerRef, static:false})
private entry:ViewContainerRef;

@ViewChild('detail',{read:ElementRef,static:false})
 private detail:ElementRef;
 tab_0:boolean = true;

  constructor(
    private  _service: ServiceService,
private render:Renderer2,
private elementRef: ElementRef) {
    

   }
   tab;mytab
  ngOnInit() {
  this.tabs = ["Signup","SingIn"    ]
  this.mytab = ['Tab 1','Tab 2','Tab 3']
  


  }



  
isActive(tab){
  this.tab = tab; 

}

iSelected(tab){
 return this.tab === tab;
  


}


  remove($event){
    this.showForm = false;
    this.showForm = $event;
    console.log(this.showForm )
    //this._service.currentMessage.subscribe(data =>this.showForm = data)
  }
  stopPropo(event){
    event.stopPropagation()
    }
}
