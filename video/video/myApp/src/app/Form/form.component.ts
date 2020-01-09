import { Component, OnInit } from '@angular/core';
import{FormGroup, Validators ,FormBuilder } from '@angular/forms';
import{HttpClient} from '@angular/common/http'
import{Pipe,PipeTransform} from '@angular/core'
import { FormService } from './form.service';
import { filter } from 'rxjs/internal/operators/filter';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']

})
/*
@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
  transform(items:any[],searchText:string){
    if(!items){
      return []
    }
    if(!searchText){
      return items;

    }

    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.toLowerCase().includes(searchText);
    });
  }

 
}
*/
export class FormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  user=[];
  userData =[];
 myData =[];
 peopleData;
 people;
 getdata =[];
 constructor(private formBuilder:FormBuilder, private fservice:FormService, private http:HttpClient ) { 
    this.getJson();
    this.userPage();
    this.peopleData = this.getDatas();
  }

 getData(){
  return this.getData

 }

  langs: string[] = ['English','Hindi','French', 'German']
  ngOnInit() {
      this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
     })
}
  get f(){
    return this.registerForm.controls
   }
  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid){

      return;
    }else{
     this.fservice.setSecureToken(this.registerForm.value.email);
     this.fservice.sendData(this.registerForm.value).subscribe((data)=>{
        console.log(data)
      })
  }

  }

  data(){
    this.fservice.getData().subscribe((data)=>{
      this.user=data.response;
       console.log(data.response);
     })
}
getJson(){
  this.fservice.getUser().subscribe((data)=>{
      this.userData = data.results;
        var userID = this.userData.filter((ele,value)=>{
          if(ele.id > 2){
            console.log(ele.id)
          }
          return userID
      })
})

}




getDatas(){
 let people:any[] = [
      {name:"Douglas  Pace",age: 35,country: "UK"},
      {name:"Mcleod  Mueller",age: 32,country: "USA"},
      {name:"Day  Meyers",age: 21,country: "HK"},
      {name:"Aguirre  Ellis",age: 34,country: "UK"},
      {name:"Cook  Tyson",age: 32,country: "USA"}
];
return people;
}



userPage(){  
 /* this.fservice.pageData().subscribe((data) => {
       alert(data)

  })
*/
}


 

}


//https://brianflove.com/2018/03/21/master-rxjs-operators/