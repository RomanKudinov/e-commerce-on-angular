import { ProductComponent } from './product/product.component';
import { ProductService } from '../shared/product.service';
import { Component, OnInit, OnChanges, ViewContainerRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'vs-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.sass']
})
export class StoreComponent implements OnInit, OnChanges {
  @ViewChild('modalContainer', {read: ViewContainerRef}) modal: ViewContainerRef;
  public widthImg = 280;
  public heightImg = 374;
  public selectedCategory: string[] = null;
  public products: Observable<Product[]>;

  constructor(private _productService: ProductService,
    private _activateRoute: ActivatedRoute) {
     }

  ngOnInit() {
    this._activateRoute.params.subscribe(({category = null, subcategory = null}) => {
      this.selectedCategory = [category, subcategory];
      this.products = this._productService.getProducts([category, subcategory]);
    });
  }

  ngOnChanges() {
  }

  getCategories(): string[] {
    return this._activateRoute.snapshot.url.map((segment) => segment.path);
  }
}
