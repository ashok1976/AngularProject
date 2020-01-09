import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ LazyRoutingModule,lazyComponent} from './lazy.routing.module'
@NgModule({
  imports: [
    CommonModule,LazyRoutingModule
  ],
  declarations: [lazyComponent]
})
export class LazymoduleModule {

constructor(){
  console.log('Ashok hit')
}
  
 }
