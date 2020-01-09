import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ ReactiveFormsModule} from '@angular/forms'
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {HttpClientModule} from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent, LogComponent],
  imports: [
    CommonModule,HttpClientModule,
    LoginRoutingModule,ReactiveFormsModule
  ]
})
export class LoginModule { }
