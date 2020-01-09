import { Component, OnInit, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { UserserviceService} from './../userservice.service';
import{ Router,ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  loginForm: FormGroup;
  message;
  myForm:boolean = true
  isAdmin:boolean;
  constructor(private fb:FormBuilder,
    private Router:Router,
    private UserserviceService:UserserviceService,
    private readonly loader: NgModuleFactoryLoader
    ) {
    

     }
   
  ngOnInit() {
    this.loginForm = this.fb.group({
      email:['ashok.its5@gmail.com', Validators.required],
      password:['12345', Validators.required]
    })
    this.UserserviceService.navData.subscribe(data => this.isAdmin = data);

 }

/*  
loadChildren(){
  this.loader.load('./admin/admin.routing.module#adminModule').then(()=>{
    this.Router.navigate(['./admin/']);
  })
 } */

  log(loginForm){
     this.UserserviceService.loginData(this.loginForm.value).subscribe(data =>{ 
       this.message = data.message;
      if(data.status == 1){
            window.localStorage.setItem('token', data.token);
            this.UserserviceService.changeNavigation(data.flag);
    
         }
          this.myForm = false;
         // this.loadChildren();

         /*  this.loader.load('./admin/admin.routing.module#adminModule')
          .then(factory => {
            console.log('Dat')
              this.Router.navigate(['./admin/']);
          }); */
          
      setTimeout(()=>{
              this.Router.navigate(['admin/product']);
            },700)
           
      })

  }

}
