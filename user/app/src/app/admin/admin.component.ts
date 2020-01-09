import { Component, OnInit } from '@angular/core';
import{ HeaderComponent} from './../header/header.component'
import{ UserserviceService} from './../login/userservice.service'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

constructor( private UserserviceService:UserserviceService, private route:ActivatedRoute) {

   }

ParentID = ['Dainikbhaskar','Divyabhaskar','Divyamarathi','Money Bhaskar']
dynamic ="http://nataliesmith.ca/blog/ngtemplate-ngcontainer-ngcontent"
  ngOnInit() {
    this.UserserviceService.changeNavigation(true);
   
  }

  changeData(){
    alert()
    this.dynamic.replace(this.dynamic,"Data change")
  }



}
