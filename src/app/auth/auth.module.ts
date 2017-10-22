import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularFontAwesomeModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
