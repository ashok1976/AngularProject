import { Component, OnInit, ContentChild, ElementRef, AfterViewInit, ContentChildren, QueryList, Input, Output, Renderer2 } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit, AfterViewInit {

  @Input() title:string;
  @Input() opened:boolean = false;
  @Output() open: EventEmitter = new EventEmitter();
  @Output() close: EventEmitter = new EventEmitter();


  //@Output() toggle: EventEmitter  = new EventEmitter();

@ContentChild('contentChildEelRef',{static:false}) contentChildEelRef: ElementRef;
@ContentChildren('contentChildrenEelRef',({read:ElementRef}))  private contentChildrenEelRef: QueryList <ElementRef>
  constructor( private ele:ElementRef,
    private renderer:Renderer2
    ) { }

  ngOnInit() {
    
   

  }
  
toggle(){
  this.opened = !this.opened;
  if(this.opened){
    this.open.emit(null)
  }else{
    this.close.emit(null)
  }
}

  ngAfterViewInit(){
  /*   console.log(this.contentChildEelRef.nativeElement.innerHTML);
    this.contentChildrenEelRef.forEach( item =>{
    console.log(item.nativeElement.innerHTML)
  }) */


  this.contentChildrenEelRef.forEach(list =>{
   

  })

  

    
  }

 
}
