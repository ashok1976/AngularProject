
import { RouterModule, Routes } from '@angular/router';
import {ModuleWithProviders } from '@angular/core';
import{ HomeComponent} from './home/home.component'
import { LoginComponent } from './login/login.component';
import {FormComponent } from './Form/form.component';
import {DataComponent } from './data/data.component';

export const appRouter : Routes = [
  {path:'home', component:HomeComponent },
  {path:'login',component:LoginComponent },
  {path:'Form', component:FormComponent },
  {path:'data', component:FormComponent },
  {path:'lazymodule', loadChildren:'./lazymodule/lazymodule.module#LazymoduleModule'},

 ]

export const appRouting: ModuleWithProviders  = RouterModule.forRoot(appRouter);
export const mainRouteComponents = [
  HomeComponent, LoginComponent,FormComponent,DataComponent,DataComponent

]






