import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormComponent } from './loginpopup/form/form.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import{  FormsModule} from '@angular/forms'
import{AppRoutingModules} from './app-routing.module'
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms'
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ViewChildComponent,dataTransform } from './view-child/view-child.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { allDirective } from './directive.directive';
import{PopupComponent} from './parentcomponent/popup/popup.component';
import { ChildformComponent } from './parentcomponent/childform/childform.component';
import { LoginpopupComponent } from './loginpopup/loginpopup.component'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import{ IntercepterServiceService} from './service/intercepter-service.service';
import { DashboardComponent } from './dashboard/dashboard.component'
import{AuthServiceGuard} from './service/auth-service.guard';
import { LoaderComponent } from './shared/loader/loader.component'
import{ loaderIntercept} from './service/loader.intercept'
import { ResolveService } from "./service/resolve.service";
import { DefaultPipe,SimplePipe,Searchfilter,NewFilter } from './dashboard/default.pipe';
import { FormractiveComponent } from './formractive/formractive.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    PopupComponent,
    allDirective,
    LoginComponent,
    HomeComponent,
    ViewChildComponent,dataTransform,
    ParentcomponentComponent,
    ChildformComponent,
    LoginpopupComponent,
    DashboardComponent,
    LoaderComponent,
    DefaultPipe,SimplePipe,Searchfilter,NewFilter, FormractiveComponent

  

    ],
   imports:[BrowserModule,CommonModule,AppRoutingModules,FormsModule,HttpClientModule,
    ReactiveFormsModule
  
  ],
  
  providers: [ResolveService,
    { provide: HTTP_INTERCEPTORS, useClass: IntercepterServiceService, multi: true},
    {provide: HTTP_INTERCEPTORS,useClass:loaderIntercept, multi:true}

  ],
  bootstrap: [AppComponent],
  entryComponents:[PopupComponent,ChildformComponent,LoginpopupComponent]

})
export class AppModule { }
