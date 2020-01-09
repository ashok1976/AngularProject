import {  Component, OnInit, ViewChild, AfterViewInit, ElementRef, Renderer2, ViewChildren,
  HostBinding, HostListener, TemplateRef, ViewContainerRef, QueryList,
   ComponentFactoryResolver, ComponentFactory, Input, OnDestroy
} from '@angular/core';
import { ViewChildComponent } from './../view-child/view-child.component'
import { DirectiveDirective,templateRefDirective} from './../directive.directive'


import { PopupComponent } from './popup/popup.component';



@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent implements OnInit, AfterViewInit,OnDestroy {
 @ViewChild(ViewChildComponent, { static: false }) viewcount: ViewChildComponent;
 @ViewChild(ViewChildComponent, { static: false }) cMessage: ViewChildComponent;
 @ViewChild('tref', { static: false }) tref: ElementRef;
 @ViewChild('msgTempRef', { static: false }) private refTempRef: TemplateRef<any>;
 @ViewChildren(DirectiveDirective)  private msgList: QueryList<DirectiveDirective>;
 @ViewChild(PopupComponent, { read: ElementRef, static: false }) dynamiccomponent:ViewContainerRef
 /*
  @ViewChild('dependOnBindings', {static: true})  dependOnBindings: ElementRef;
  @ViewChild('doNotDependOnBindings', {static: true}) doNotDependOnBindings: ElementRef; */
  @ViewChild('templateRefDirective',{static:false}) private  tempEntery:templateRefDirective

  @ViewChild('mytemp',{read:TemplateRef, static:false}) private  refMyTemplate:TemplateRef<any>
  @ViewChild('myDom',{static:true}) private myDom : ElementRef<any>
  msg; cmsg;innerHTMLMsg
  shouldDisplay:boolean;
  @Input() tile: any;
  parentMessage = " Message from parent";
  dyMsg:"Dynamic component load";

  constructor(public el:ElementRef, 
    private _render: Renderer2,
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) {  }

  ngOnInit(){
          //  this.msg = this.cMessage.myMsg;
            this.shouldDisplay = true
          }
  increase() {
    this.viewcount.increaseOneby();

  }
  getData(message) {
    this.cmsg = message
  }

  ngAfterViewInit() {
    this._render.addClass(this.tref.nativeElement, 'addClass');
    this.tref.nativeElement.innerHTML = "DOM updated successfully!!!";
    let len = this.msgList.length;
    let last = this.msgList.last;
    this.msgList.forEach((val, index) => {
   val.viewContainerRef.createEmbeddedView(this.refTempRef);
      if (index % 2 == 0) {
        this._render.addClass(this.el.nativeElement, 'has')
   
        }
    })
   this.myDom.nativeElement.innerHTML = "Hello Angular 8!"
   this.emplateRef()
 }
  loadComponent(){
        this.viewContainerRef.clear()
          const factory = this.componentFactoryResolver.resolveComponentFactory(PopupComponent);
          const viewContainer = this.viewContainerRef.createComponent(factory);
          viewContainer.instance.dynamicMessage = this.dynamiccomponent;
        }
  ngOnDestroy(){
     this.destroyComponent();
  }
  destroyComponent(){
      this.viewContainerRef.clear();
  }
  temShow:boolean = false;
  emplateRef(){




  }

}

