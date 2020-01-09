import { Component, OnInit, Output,EventEmitter, Input, OnChanges } from '@angular/core';
import{ NgForm} from '@angular/forms';
import{Router} from '@angular/router'
import{ ServiceService} from './../service/service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit,OnChanges {
  log;
  msg;
  signVal:boolean = false;
  login = { email:'', password:''}
  myForm:NgForm;

  constructor( private service:ServiceService, private router:Router) { }
  ngOnInit() { 
    this.service.currentMessage.subscribe(data =>{ this.signVal = data })
  }
  onLogin(myForm:NgForm){
        this.service.sendLogin(myForm.value).subscribe(data=>{
          this.log = data;
          if(data.status == 1){
            this.msg = data.message;
            this.service.changeMessage(this.signVal = data.type)
            localStorage.setItem('token',data.token);
            this.router.navigate(['/home']);
            }else if(data.status == 0){
                this.msg = data.message;
                this.service.changeMessage(this.signVal = data.type)
          } 
      })
 }

ngOnChanges(){}


}
