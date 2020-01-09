import { Component, OnInit, Output,Input,ViewContainerRef, ComponentFactoryResolver, AfterViewInit, ViewChild, OnChanges,  } from '@angular/core';
import {ServiceService} from './../service/service.service';
import { Router} from  '@angular/router'
import{LoginpopupComponent} from './../loginpopup/loginpopup.component'
import { tokenName } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,AfterViewInit, OnChanges {
signVal:boolean = true;

@ViewChild('parent', {read: ViewContainerRef, static:false})  private entry:ViewContainerRef


constructor( private _service : ServiceService,
  private router:Router,private viewContainerRef: ViewContainerRef,
   private componentFactoryResolver: ComponentFactoryResolver) {
    if(window.localStorage.getItem('token')){
           this.signVal = false
          }

     } 
 
  ngOnInit() {
    this._service.currentMessage.subscribe(data => this.signVal = data);
    if(window.localStorage.getItem('token')){
      this.signVal = false
     }
  }

logout(){
  this.signVal = true
  window.localStorage.removeItem('token');
  this.router.navigate(['/login']);
 

}

ngOnChanges(){
  
}
createAccount(){
    this.viewContainerRef.clear();
     const factory = this.componentFactoryResolver.resolveComponentFactory(LoginpopupComponent);
    const  component = this.viewContainerRef.createComponent(factory);
    component.instance._refDynamicPopup = LoginpopupComponent;
  }

  ngAfterViewInit(){ }



}
