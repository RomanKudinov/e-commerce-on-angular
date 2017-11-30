import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { ModalComponent } from './store/modal/modal.component';
import { CartModule } from './cart/cart.module';
import { StoreModule } from './store/store.module';
import { TokenInteceptor } from './shared/token.interceptor';
import { NavigationModule } from './navigation/navigation.module';
import { AuthModule } from './auth/auth.module';
import { NavigationService } from './shared/navigation.service';
import { TopLineModule } from './top-line/top-line.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RestDataService } from './shared/rest-data.service';
import { CartService } from './shared/cart.service';
import { ProductService } from './shared/product.service';
import { ModalService } from './shared/modal.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopLineModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    AngularFontAwesomeModule,
    NavigationModule,
    StoreModule,
    CartModule
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [
    RestDataService,
    NavigationService,
    ProductService,
    CartService,
    ModalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInteceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
