import { ProductService } from '../shared/product.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'vs-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.sass']
})
export class StoreComponent implements OnInit, OnChanges {
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

  // get products(): Product[] {
  //   return this._productService.getProducts(this.selectedCategory);
  // }

  getCategories(): string[] {
    return this._activateRoute.snapshot.url.map((segment) => segment.path);
  }
}
