import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  message:any;
  count : number = 0

  constructor() { }

  ngOnInit() {
   

  }
  inCreaseByOn(){
    this.count= this.count + 1;
    this.message = this.count
  }

}
