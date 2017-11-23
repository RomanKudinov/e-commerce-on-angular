import { RestDataService } from './rest-data.service';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs/Observable';
import { filter, map, find } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProductService {
  private _products: Observable<Product[]>;

  constructor(private _restData: RestDataService) {
    this._products = _restData.getProducts();
  }

  getProducts(categories: string[] = null): Observable<Product[]> {
    return this._products.pipe(
      map((products: Product[]) => {
        return products.filter((p: Product) => {
          return (categories[0] === p.categories[0] && categories[1] === p.categories[1])
          || (categories[0] === p.categories[0] && categories[1] === null);
        });
      })
    );
  }

  getProduct(id: number): Observable<Product> {
    return this._products.pipe(
      map((products: Product[]) => products.find((p: Product) => p.id === id))
    );
  }

  // saveProduct(product: Product) {
  //   if (product.id === null || product.id === 0) {
  //     product.id = new Date().valueOf();
  //     this._restData.saveProduct(product)
  //       .subscribe((prod) => this._products.push(prod));
  //   } else {
  //     this._restData.updateProduct(product)
  //       .subscribe((prod) => {
  //         this._products.splice(this._products.findIndex((p) => product.id === p.id), 1, product);
  //       });
  //   }
  // }

  // deleteProduct(id: number) {
  //   this._restData.deleteProduct(id)
  //     .subscribe((prod) => {
  //       this._products.splice(this._products.findIndex((p) => p.id === id), 1);
  //     });
  // }
}
