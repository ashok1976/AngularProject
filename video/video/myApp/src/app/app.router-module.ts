import { NgModule } from '@angular/core';
import{Routes,RouterModule} from '@angular/router'
import {FormComponent } from './Form/form.component';
import {DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { LazyComponent } from './lazy/lazy.component';

const appRoutes:Routes = [
  {path:' /',  component:HomeComponent },
  {path:'home', component:HomeComponent },
  {path:'Form', component:FormComponent },
  {path:'data', component:DataComponent},
  {path:'login', component:LoginComponent}
  //{path:'lazy', component:LazyComponent},
  //{path:'lazy/product', component:LazyComponent},
  /* {path:'**', children:[
    {path:'lazy', component:LazyComponent},
  ]
} */
]
@NgModule({
  imports: [ RouterModule.forChild(appRoutes) ],
  declarations: [],
  exports: [RouterModule  ]
})

