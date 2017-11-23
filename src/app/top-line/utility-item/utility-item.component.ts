import { Component, OnInit, Input, HostListener } from '@angular/core';
import { CartService } from '../../shared/cart.service';

@Component({
  selector: 'vs-utility-item',
  templateUrl: './utility-item.component.html',
  styleUrls: ['./utility-item.component.sass']
})
export class UtilityItemComponent implements OnInit {
  @Input() type: string;

  constructor(private _cart: CartService) { }

  ngOnInit() {
  }

  @HostListener('click')
  openCart() {
    if (this.type === 'cart') {
      this._cart.setState('open');
    }
  }

}
