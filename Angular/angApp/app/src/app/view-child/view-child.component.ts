import { Component, OnInit, ViewChild, ElementRef, ContentChild, ContentChildren,
  AfterViewInit, Input, Output, OnChanges, SimpleChange, SimpleChanges, DoCheck,
   AfterContentChecked, AfterContentInit, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { EventEmitter } from 'events';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { ChildrenOutletContexts } from '@angular/router';
@Pipe({
name:'data'

})
export class dataTransform implements PipeTransform{
  result: any;
    transform(value:[]){
    //if(!value){ return true}
    var result=[];
        //if(Array.isArray(value)){
          return value.map((ele,index,array) => {
              return result.filter(val =>{
                    
                          console.log(val)
                  
                   
               })
            })
        }
        
   // }
}
@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit,AfterViewInit, OnChanges,DoCheck
,AfterContentChecked,AfterContentInit,OnDestroy{
  @Input() childMessage;
  @Input() myValue = 'Ashok';
  person =[
    {id:1,gender:'Male',name:'Ashok'},
    {id:2,gender:'Male',name:'Sanjay'},
    {id:3,gender:'Female',name:'Pooja'},
    {id:4,gender:'Female',name:'Shriya'},
    {id:5,gender:'Male',name:'Shourya'},
    {id:4,gender:'Female',name:'Shriya'},
    {id:5,gender:'Male',name:'Shourya'}
   
   ]

  myMsg:string =" Message from child";
  count:number = 0;

constructor() { 
    console.log("Constructor called")
  }

ngOnInit() {
    console.log("ngOnInit called")

  }


  increaseOneby(){
   this.count = this.count +1;
  }
ngOnChanges(changes:SimpleChanges){

  console.log("get onchange cureent value" + changes.myValue.currentValue 
  +" get Previous value "+  changes.myValue.previousValue +"get is firstChange::"+
  changes.myValue.isFirstChange +"get is first changes"+ changes.myValue.firstChange)
}

  
ngDoCheck(){
console.log('ngDoCheck colled')

}

ngAfterContentChecked(){
console.log('ngAfterContentCheck life hoooks called')

}

ngAfterContentInit(){
console.log('AftercoontentInit methord is called')

}
ngAfterViewInit(){}

ngOnDestroy(){

  console.log('ngOnDestroy method called')
}

pipes = [12,13,14,15,16,17,18,19,20, 'india', 'Pakishtan'];




//birthday = new Date(1976,1,30);
birthday = new Date(1976, 1, 30); // April 15, 1988
}
