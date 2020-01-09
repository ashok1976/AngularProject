import { Component, OnInit, ContentChild,ContentChildren,AfterViewInit,
  ElementRef,QueryList,Renderer2, ViewChild, Directive, ViewChildren, ViewContainerRef, SimpleChange, SimpleChanges, Pipe, PipeTransform} from '@angular/core';
import { MessageComponent } from './../message/message.component';
import{DirectiveDirective,VidewchildrenDirective} from '././../../directive/directive.directive';
import{ TabComponent} from './../tab/tab.component'
import{ AlertComponent} from './../alert/alert.component'

@Pipe({ name: 'filesize' })

export class FileSizePipe implements PipeTransform {
  transform(value, args: string[]): any {
    let values = []
    console.log('values'+ values)
    for (let key in value) {
      values.push(value[key])
    }
    return values
  }
}
@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.css']
})


export class NgContentComponent implements OnInit, AfterViewInit {
  toggleFlag1:boolean = true;
  toggleFlag2:boolean = true
  toggleFlag3:boolean = true;


@ViewChild(MessageComponent,{static:false}) private MessageComponent:MessageComponent;
@ViewChild(DirectiveDirective,({read:DirectiveDirective,static:false}))
 private DirectiveDirective:DirectiveDirective;

@ViewChildren(VidewchildrenDirective,({read:VidewchildrenDirective}))
private listDirective:QueryList<VidewchildrenDirective>
tabs; alert;
messages;
message = '';
@ViewChildren(AlertComponent,({read:AlertComponent}))  private alerts:QueryList<AlertComponent>
  constructor( private renderer:Renderer2,private ele:ElementRef) { }

  ngOnInit(){
        this.tabs = [
          {title:'One', body:'@ContentChild gives the first element or directive matching the selector from the content DOM.'},
          {title:'Two', body:'@ContentChild 2 gives the first element or directive matching the selector from the content DOM.'},
          {title:'Three', body:'@ContentChild 2 gives the first element or directive matching the selector from the content DOM.'},
          {title:'Four', body:'@ContentChild 2 gives the first element or directive matching the selector from the content DOM.'}
        ];
        
      
      this.messages = [
          {id:11214544, text:"Message :: 11214544"},
          {id:11214545, text:"Message :: 11214545"},
          {id:11214546, text:"Message :: 11214546"},
          {id:11214547, text:"Message :: 11214547"}
      ]
  this.alert="Alert";




}
trackByFn(){

}


    toggle($event){
      }
      ngDoCheck() {
        console.log('ngDoCheck')
       
      }
   
 
    ngAfterViewInit(){ 
      this.MessageComponent.message;
     this.alerts.reduce((prev,next)=>{
    //  console.log(prev , next)
        return 1;
     },0)
      this.alerts.forEach(instance =>{
        instance.name == 'Angular 6' ? instance: null;
      //(instance.name ==='Angular 6') ?  console.log(instance) : ''
      });
 

    }
    changeColor(color){
        this.DirectiveDirective.colorChange(color);
      }
    change(color){
      this.listDirective.forEach(function(list){
        list.childrenColor(color);
      })   
    }
    increase(){
        this.MessageComponent.inCreaseByOn()
      }
    onToggle2(){
    this.toggleFlag2 = (this.toggleFlag2 == false) ? true : false;
    }

    onToggle3(){
      this.toggleFlag3 = (this.toggleFlag3 == true) ? false : true;
    }





}
