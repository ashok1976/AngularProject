import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import{ HttpClient} from '@angular/common/http'
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './admin/product/product.component';
import { ProductdetailComponent } from './admin/productdetail/productdetail.component';
import { NgContentComponent,FileSizePipe} from './admin/ng-content/ng-content.component';
import { MessageComponent } from './admin/message/message.component';
import { allDirective } from './directive/directive.directive';
import { TabComponent } from './admin/tab/tab.component';
import { AlertComponent } from './admin/alert/alert.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminComponent,
    ProductComponent,
    ProductdetailComponent,
    NgContentComponent,
    MessageComponent,FileSizePipe,
    allDirective,
    TabComponent,
    AlertComponent
  
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,
    AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
