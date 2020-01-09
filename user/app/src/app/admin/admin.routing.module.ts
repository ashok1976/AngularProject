import{NgModule} from '@angular/core';
import{ CommonModule} from '@angular/common';
import { RouterModule, Routes} from '@angular/router'
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../login/AuthGuard';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductComponent } from './product/product.component';

const adminRoute : Routes = [
    {path:'admin', loadChildren:'./admin/admin.routing.module#adminModule', canLoad:[AuthGuard]},
    {path:'admin', component:AdminComponent,
       children:[ 
                    {path:'admin', component:AdminComponent},
                    {path:'', canActivateChild:[AuthGuard], 
       children:[
                    {path:'product', component:ProductComponent},
                    {path:'productdetail/:id',  component:ProductdetailComponent}
                ]
        }
      ]
     }, 
     
    
     
     {path:'**', redirectTo:''} 
     
     
     
    ]
    

@NgModule({
  
   imports:[CommonModule, RouterModule.forRoot(adminRoute)],
   declarations:[],
    
})
export class adminModule { }