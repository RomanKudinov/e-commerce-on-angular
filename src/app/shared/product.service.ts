import { RestDataService } from './rest-data.service';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable()
export class ProductService {
  private _products: Product[] = [];

  constructor(private _restData: RestDataService) {
    _restData.getProducts().subscribe((res) => {
      this._products = res;
    });
  }

  getProducts(categories: string[] = null): Product[] {
    return this._products
      .filter((prod) => (categories[0] === prod.categories[0] && categories[1] === prod.categories[1])
       || (categories[0] === prod.categories[0] && categories[1] === null));
  }

  getProduct(id: number): Product {
    return this._products.find((prod) => prod.id === id);
  }

  saveProduct(product: Product) {
    if (product.id === null || product.id === 0) {
      product.id = new Date().valueOf();
      this._restData.saveProduct(product)
        .subscribe((prod) => this._products.push(prod));
    } else {
      this._restData.updateProduct(product)
        .subscribe((prod) => {
          this._products.splice(this._products.findIndex((p) => product.id === p.id), 1, product);
        });
    }
  }

  deleteProduct(id: number) {
    this._restData.deleteProduct(id)
      .subscribe((prod) => {
        this._products.splice(this._products.findIndex((p) => p.id === id), 1);
      });
  }
}
