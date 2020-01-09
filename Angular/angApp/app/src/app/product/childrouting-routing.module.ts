import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ProductdetailComponent} from './productdetail/productdetail.component'
import { ProductComponent } from './product.component';
import { ProductlistComponent} from './productlist/productlist.component';
import{ProductResolveComponent} from './productresolve/product-resolve.component'
import{ResolveService} from './../service/resolve.service';

const routes: Routes = [
  {path:'', component:ProductlistComponent,
  children: [
    {path:'', component:ProductComponent},
    {path:'product', component:ProductComponent},
    {path:'productresolve/:countryId', component:ProductResolveComponent,
    data: { title: 'MyTitle' },
    resolve:{ countryDetail : ResolveService}},
    {path:'productdetail',component:ProductdetailComponent}
  ],
}

 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildroutingRoutingModule { }
export const childComponentArray = [ProductComponent,ProductdetailComponent,ProductlistComponent]
