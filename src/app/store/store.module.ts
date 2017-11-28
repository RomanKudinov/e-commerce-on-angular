import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { ProductComponent } from './product/product.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { OptionComponent } from './option/option.component';
import { FilterService } from '../shared/filter.service';
import { OptionsContainerComponent } from './options-container/options-container.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    StoreRoutingModule,
    AngularFontAwesomeModule
  ],
  declarations: [StoreComponent, ProductComponent, OptionComponent, OptionsContainerComponent, ModalComponent],
  exports: [ModalComponent],
  providers: [FilterService]
})
export class StoreModule { }
