import { ProductService } from '../../shared/product.service';
import { CartService } from '../../shared/cart.service';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Line } from '../../model/line-item.model';
import { ModalService } from '../../shared/modal.service';

@Component({
  selector: 'vs-line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.sass']
})
export class LineItemComponent implements OnInit {
  @Input() line: Line;

  constructor(private _cart: CartService,
    private _modalService: ModalService,
    private _productService: ProductService) { }

  ngOnInit() {
  }

  removeLineFromCart() {
    this._cart.removeLineFromCart(this.line.id);
  }

  setModalData() {
    const $product = this._productService.getProduct(this.line.id);

    $product.subscribe(product => this._modalService.setModalData({product, type: 'EDIT', state: true}));
  }
}
