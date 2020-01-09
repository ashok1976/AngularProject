import { Component, Output,Input, EventEmitter,OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

@Output() changeValue = new EventEmitter();
story;

public behaviourChild : string;
  constructor(private _service: ServiceService) { }
  ngOnInit() {

    this._service.behaves.subscribe((data) => {
      this.behaviourChild = data;
     console.log( this.behaviourChild +"ssssssssssss")
   
    })
  }

couter:number = 0;

onValid(){
  this.couter = this.couter + 2
  this.story = this.changeValue.emit(this.couter);
  this._service.setBehave('bye');

}


}
