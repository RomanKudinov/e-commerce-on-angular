import { AuthModule } from './auth/auth.module';
import { NavigationService } from './shared/navigation.service';
import { NavItemModule } from './nav-item/nav-item.module';
import { TopLineModule } from './top-line/top-line.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopLineModule,
    BrowserAnimationsModule,
    NavItemModule,
    HttpClientModule,
    AuthModule,
    AngularFontAwesomeModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
