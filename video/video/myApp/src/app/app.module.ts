import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent } from './app.component';
import {HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import{ FormsModule} from '@angular/forms'
import {ReverseStr,myPipe, FilterPipe,removeDuplicateName,currencyType, myfilter} from './pipe-transform'
import { ChildrenComponent } from './children/children.component';
import { FirstformComponent } from './firstform/firstform.component';
import { SecondformComponent } from './secondform/secondform.component';
import { DynamicCompnentComponent } from './dynamic-compnent/dynamic-compnent.component';
import { appRouting,mainRouteComponents } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,  HeaderComponent,mainRouteComponents,
    ChildrenComponent,ReverseStr,myPipe, FilterPipe,removeDuplicateName,currencyType,myfilter,
     FirstformComponent, SecondformComponent, DynamicCompnentComponent
  ],
  imports: [appRouting, BrowserModule,ReactiveFormsModule,FormsModule, HttpClientModule,
    BrowserModule.withServerTransition({appId: 'my-app'}),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//https://www.agiratech.com/build-dynamic-component-in-angular-6/



