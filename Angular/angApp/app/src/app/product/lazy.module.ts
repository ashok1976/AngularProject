import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildroutingRoutingModule,childComponentArray} from './childrouting-routing.module';
import { ProductResolveComponent } from './productresolve/product-resolve.component'
@NgModule({
  declarations: [childComponentArray, ProductResolveComponent],
  imports: [
    CommonModule,ChildroutingRoutingModule
  ],
  exports:[childComponentArray]
})
export class LazyModule {
  constructor(){
  console.log('ashok----------')
}
 }
