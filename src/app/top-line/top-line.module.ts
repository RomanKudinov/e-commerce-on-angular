import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopLineRoutingModule } from './top-line-routing.module';
import { TopLineComponent } from './top-line.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { UtilityItemComponent } from './utility-item/utility-item.component';
import { LoginAnchorComponent } from './login-anchor/login-anchor.component';

@NgModule({
  imports: [
    CommonModule,
    TopLineRoutingModule,
    AngularFontAwesomeModule
  ],
  declarations: [TopLineComponent, SearchBoxComponent, UtilityItemComponent, LoginAnchorComponent],
  exports: [TopLineComponent]
})
export class TopLineModule { }
