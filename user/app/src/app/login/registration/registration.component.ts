import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'
import { UserserviceService} from './../userservice.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  myForm: FormGroup;exitID
  constructor(private fb:FormBuilder, private UserserviceService:UserserviceService) {


   }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      userid : ['', Validators.required],
      email:['', [Validators.required,Validators.email]],
      password:['',Validators.required],
      role:['', Validators.required]
     
    })
  }
  onSubmit(){
    this.UserserviceService.sendData(this.myForm.value).subscribe((data)=>{
    
      this.exitID = data.message;
      console.log('my Message '+ this.exitID)
      


    })
  }

}
