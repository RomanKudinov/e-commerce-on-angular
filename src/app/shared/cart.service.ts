import { Injectable } from '@angular/core';
import { Line } from '../model/line-item.model';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CartService {
  public cart: Line[] = [];
  public lastLine: Line;
  public cartPrice = 0;
  public itemCount = 0;
  public cartState = new Subject<string>();

  constructor() { }

  addLineToCart(line: Line) {
    this.cart.unshift(line);
    this.lastLine = line;
    this.recalculate();
  }

  removeLineFromCart(id: number) {
    this.cart.splice(this.cart.findIndex((line) => line.id === id), 1);
    this.recalculate();
  }

  updateLine(id: number, newLine: Line) {
    this.cart.splice(this.cart.findIndex((line) => line.id === id), 1, newLine);
    this.recalculate();
  }

  getState(): Observable<string> {
    return this.cartState.asObservable();
  }

  setState(state: string) {
    this.cartState.next(state);
  }

  recalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;

    this.cart.forEach((line: Line) => {
      this.itemCount += line.quantity;
      this.cartPrice += line.quantity * line.price;
    });
  }
}
