import { Component, OnInit,Output,EventEmitter ,Input, ViewChild, ElementRef,AfterViewInit}
 from '@angular/core';
import { ViewChildComponent } from './../view-child/view-child.component'
import{ ServiceService} from './../service/service.service'
import{ LoaderComponent } from './../shared/loader/loader.component'
import{  LoaderService} from './../service/loader.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  //@Output() sendData = new EventEmitter();
  @Output() sendData: EventEmitter<any> =   new EventEmitter();
  @Input() parentMsg;
  msgChild =" Send data child to parent on click";
  parentValue;
  componentDestroy:boolean = true
  isloading
  constructor(    private _service:ServiceService
,
private loaderService : LoaderService
  ) { }
data; mystatus;
  ngOnInit(){  

  

    this._service.getPost().subscribe(req =>{
        this.data = req
    })





  }

  sendMessage($event){
    this.sendData.emit(this.msgChild)
  }
  ngAfterViewInit(){


  }
 
 
  destroycomponent(){

    this.componentDestroy = false;

  }
  restorecomponent(){
this.componentDestroy= true

  }
  updateData(val){
    this.parentValue = val.value

  }


}
