import { CartService } from '../shared/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vs-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  constructor(public cart: CartService) { }

  ngOnInit() {
  }

  closeCart() {
    this.cart.setState('close');
  }

}
