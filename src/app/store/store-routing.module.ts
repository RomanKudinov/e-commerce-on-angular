import { ProductComponent } from './product/product.component';
import { StoreComponent } from './store.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: ':category', component: StoreComponent },
  { path: ':category/:subcategory', component: StoreComponent },
  { path: ':category/:subcategory/:id', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
