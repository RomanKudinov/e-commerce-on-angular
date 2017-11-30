import { Component, OnInit, ViewEncapsulation, Input, ViewContainerRef, ViewChild } from '@angular/core';

import { ProductService } from '../../shared/product.service';
import { CartService } from '../../shared/cart.service';
import { Line } from '../../model/line-item.model';
import { ModalService } from '../../shared/modal.service';
import { ModalComponent } from '../../store/modal/modal.component';
import { ModalResults } from '../../shared/modal-results.enum';

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

  showModal() {
    const $product = this._productService.getProduct(this.line.id);

    $product.subscribe(product => {
      const $modalState = this._modalService.showModal(ModalComponent, {
        product,
        type: 'EDIT'
      });

      $modalState.subscribe(
        (x: ModalResults) => {
          if (x === ModalResults.Closed) {
            console.log(this._modalService.modalContainer.element);
            this._modalService.modalContainer.clear();
            $modalState.unsubscribe();
          }
        });
    });
  }
}
