import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { ProductComponent } from './product/product.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    StoreRoutingModule,
    AngularFontAwesomeModule
  ],
  declarations: [StoreComponent, ProductComponent]
})
export class StoreModule { }
