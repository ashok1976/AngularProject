import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import{ UserserviceService} from './userservice.service';
import{ActivatedRoute,Router, NavigationStart} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {


 tab:boolean = true;
 sub;
 currentURL
 constructor(
   private UserserviceService:UserserviceService,
   private router:Router,
  private activatedRouter:ActivatedRoute) { 

   
    
   


  }

  ngOnInit() {
    this.UserserviceService.changeNavigation(false);
    this.activatedRouter.queryParams.subscribe(queryParams =>{
      this.tab = queryParams.app == 'login' ? false: true;
      //if(queryParams.app == 'login'){
        //    this.tab = queryParams.tab;
        // }else{
        //     this.tab = !queryParams.tab;
        // }
    })
  }

  loginBtn(){
    //this.login = !this.login
   // this.login = !this.reg
   
  }

}
