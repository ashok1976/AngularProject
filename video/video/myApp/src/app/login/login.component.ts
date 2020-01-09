import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms'
import { FormService } from './../Form/form.service'
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform:FormGroup
submitted = false;
login = [];
success = [];failer = [];
  constructor( private fb:FormBuilder, private fservice:FormService) {

    

   }
  ngOnInit() {
    this.loginform = this.fb.group({
      email: ['', Validators.required]
    })

  }
  get f(){
    return this.loginform.controls
   }

  loginSubmit(){
      this.submitted = true;
      if(this.loginform.invalid){
        return
        }else{
        this.fservice.sendLogin(this.loginform.value).subscribe((res)=>{
          this.login= res;
          this.success = res.code
          this.failer = res.codeerror
            
           })
        }
    }

 

  
}
