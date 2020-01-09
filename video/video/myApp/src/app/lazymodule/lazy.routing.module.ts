import{ NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import{ PostsComponent } from './posts.component'
import{ ProductDetailComponent} from './product-detail/product-detail.component'
import { ProductbigComponent} from './product/productbig.component'; 
const lazyRouting : Routes = [
        {path:'',  component: ProductbigComponent},
        {path:'product-detail', component: ProductDetailComponent },
       
   
]
@NgModule({
    imports: [RouterModule.forChild(lazyRouting) ],
    exports: [RouterModule]
})

export class LazyRoutingModule { }
export const lazyComponent = [PostsComponent,ProductDetailComponent,ProductbigComponent]


