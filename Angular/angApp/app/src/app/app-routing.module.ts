import{ RouterModule} from '@angular/router'
import{NgModule} from '@angular/core'
import { AppComponent } from './app.component';
import{ HomeComponent} from './home/home.component'
import { LoginComponent   } from './login/login.component';
import { ParentcomponentComponent} from './parentcomponent/parentcomponent.component'
import{ DashboardComponent} from './dashboard/dashboard.component'

import { Routes, CanActivate } from '@angular/router';
import{  AuthServiceGuard as AuthGuard } from './service/auth-service.guard';
import{ FormractiveComponent} from './formractive/formractive.component'


const appRouter:Routes = [

{path:'home', component:HomeComponent},
{path:'product', loadChildren:'./product/lazy.module#LazyModule'},
{path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard] },
{path:'login', component:LoginComponent},
{path:'parentcomponent', component:ParentcomponentComponent},
{path:'formreactive', component:FormractiveComponent}
]

@NgModule({
imports:[RouterModule.forRoot(appRouter)],
exports:[RouterModule]
})

export class AppRoutingModules{}