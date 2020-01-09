import { Component, OnInit } from '@angular/core';
import{ Router,NavigationStart} from '@angular/router'
import{ UserserviceService} from './../login/userservice.service'
import { ActivatedRoute} from '@angular/router';
import {} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  tab:boolean = false;
  isAdmin:boolean
  constructor( private router:Router,
   private activateRouter: ActivatedRoute,
   private UserserviceService :UserserviceService ) {
     
   }
  ngOnInit(){
    this.UserserviceService.navData.subscribe(data => this.isAdmin = data);
         
  }
  Registration(){
    window.localStorage.removeItem('token');
    this.router.navigate(['/'], { queryParams: {app:'register' } });
   }
  logout(){
    let token =  window.localStorage.removeItem('token');
     this.UserserviceService.logout(token).subscribe(data =>{
      console.log(data.status)
     })
    this.router.navigate(['/'], { queryParams: { app:'login' } });
/*     this.router.events.forEach((event)=>{
      if(event instanceof NavigationStart){
        console.log('route chake');
        if(event['url'] == ''){
         this.tab = false;
         console.log('tabs'+ this.tab);
        }else{
          this.tab = true;
        }
      }
    }) */
   }

}
