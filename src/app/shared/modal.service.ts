import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ModalService {
  private _modalData = new Subject<{product: Product, type: string, state: boolean}>();

  constructor() { }

  setModalData(modal: {product: Product, type: string, state: boolean}) {
    this._modalData.next(modal);
  }

  getModalData(): Observable<{product: Product, type: string, state: boolean}> {
    return this._modalData.asObservable();
  }

}
