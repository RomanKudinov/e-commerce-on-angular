import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavigationComponent } from './navigation.component';

@NgModule({
  imports: [
    CommonModule,
    NavigationRoutingModule
  ],
  declarations: [NavigationComponent, NavItemComponent],
  exports: [NavigationComponent]
})
export class NavigationModule { }
