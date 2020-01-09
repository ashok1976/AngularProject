import{ NgModule } from '@angular/core';
import{ Routes, RouterModule, ExtraOptions } from '@angular/router';
import{ LoginModule} from './login/login.module'
import{ ReactiveFormsModule} from '@angular/forms'
import{ AdminComponent} from './admin/admin.component'
import{ AuthGuard } from './login/AuthGuard'
import{ ProductComponent } from './admin/product/product.component';
import { ProductdetailComponent } from './admin/productdetail/productdetail.component';
import{ NgContentComponent} from './admin/ng-content/ng-content.component'
const routerOption:ExtraOptions = {
scrollPositionRestoration:'enabled',
anchorScrolling:'enabled',

}

const routes: Routes = [
{path: '', loadChildren:'./login/login.module#LoginModule'},

{path:'admin', component:AdminComponent,
   children:[ 
                {path:'admin', component:AdminComponent},
                {path:'', canActivateChild:[AuthGuard], 
   children:[
                {path:'product', component:ProductComponent},
                {path:'productdetail/:id',  component:ProductdetailComponent},
                {path:'ng-content', component:NgContentComponent},
            ]
    }
  ]
 }, 
 

 
 {path:'**', redirectTo:''} 
 
 
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOption), LoginModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
