import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-childform',
  templateUrl: './childform.component.html',
  styleUrls: ['./childform.component.css']
})
export class ChildformComponent implements OnInit {
myForm = FormGroup;


  constructor() { }

  ngOnInit() {

    let myForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl('')
      
      })
  }
updatedForm(){
 //this.myForm.name.setValue= "Ajay"

}
onSubmit(){
 // console.log(this.myForm.value)
}
}
