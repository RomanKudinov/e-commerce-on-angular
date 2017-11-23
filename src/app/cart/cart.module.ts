import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { LineItemComponent } from './line-item/line-item.component';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    AngularFontAwesomeModule
  ],
  declarations: [CartComponent, LineItemComponent],
  exports: [CartComponent]
})
export class CartModule { }
