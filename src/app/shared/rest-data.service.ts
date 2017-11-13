import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs/Observable';
import { NavItem } from '../model/nav-item.model';

const PROTOCOL = 'http';
const PORT = 3500;
const NAVIGATION = 'navigation';
const PRODUCTS = 'products';

@Injectable()
export class RestDataService {

  private _baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}`;
  public authToken: string;

  constructor(private _http: HttpClient) { }

  authenticate() { }

  getNavigation(): Observable<NavItem[]> {
    return this._http.get<NavItem[]>(`${this._baseUrl}/${NAVIGATION}`);
  }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(`${this._baseUrl}/${PRODUCTS}`);
  }

  saveProduct(product: Product) {
    return this._http.post<Product>(`${this._baseUrl}/${PRODUCTS}`, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this._http.put<Product>(`${this._baseUrl}/${PRODUCTS}/${product.id}`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this._http.delete<Product>(`${this._baseUrl}/${PRODUCTS}/${id}`);
  }
}
