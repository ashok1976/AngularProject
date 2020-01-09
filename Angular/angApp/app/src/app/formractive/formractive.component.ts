import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators, FormArray} from '@angular/forms';


@Component({
  selector: 'app-formractive',
  templateUrl: './formractive.component.html',
  styleUrls: ['./formractive.component.css']
})
export class FormractiveComponent implements OnInit {
  loginForm: FormGroup;

sum = 0

constructor( private fb:FormBuilder ){




 }
ngOnInit() {
    this.loginForm = this.fb.group({
      name:['', [Validators.required, Validators.minLength(5)]],
      email:['', Validators.required],
      items:this.fb.array([this.createItem()])
    })


  
}
createItem(): FormGroup {
  return this.fb.group({
    bookname:['', Validators.required],
    description:['', Validators.required], 
   price:['', Validators.required],

  })
}
get items() {
  return this.loginForm.get('items') as FormArray;
}
/* get name(){
  return this.loginForm.get('name');
}
get email(){
  return this.loginForm.get('email')

} */



addItem(){
   this.items.push(this.createItem()) 
}

onSubmit(){

 //let getPro = this.items;
 //let len = getPro.controls.length;
let sum  = this.items.value.reduce((a,c)=> {
  return a + +c.price
},0)

for(let i= 0; i<this.items.length; i++){

  console.log(this.items.at(i).get('price').value)


}


}




  }


  

  
  



