import { CartService } from '../../shared/cart.service';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Line } from '../../model/line-item.model';

@Component({
  selector: 'vs-line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.sass']
})
export class LineItemComponent implements OnInit {
  @Input() line: Line;

  constructor(private _cart: CartService) { }

  ngOnInit() {
  }

  removeLineFromCart() {
    this._cart.removeLineFromCart(this.line.id);
  }
}
