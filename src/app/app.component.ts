import { ProductService } from './shared/product.service';
import { CartService } from './shared/cart.service';
import { NavigationService } from './shared/navigation.service';
import { Component, OnInit, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Product } from './model/product.model';
import { ModalComponent } from './store/modal/modal.component';
import { ModalResults } from './shared/modal-results.enum';
import { ModalService } from './shared/modal.service';

@Component({
  selector: 'vs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('showCart', [
      state('close', style({
        transform: 'translateX(100%)',
        transition: 'transform 0.5s ease-in'
      })),
      state('open', style({
        transform: 'translateX(0%)',
        transition: 'transform 0.5s ease-in'
      }))
    ])
  ]
})
export class AppComponent implements OnInit {
  @ViewChild('modal', {read: ViewContainerRef}) modal: ViewContainerRef;
  public cartState = 'close';

  constructor(private _navigationService: NavigationService,
    public cart: CartService,
    private _elem: ElementRef,
    private _productService: ProductService,
    private _modalService: ModalService) {
  }

  ngOnInit() {
    this._modalService.init(this.modal);
    // tslint:disable-next-line:no-shadowed-variable
    this.cart.getState().subscribe((state) => {
      this.cartState = state;
        switch (state) {
          case 'open':
          this._elem.nativeElement.style.height = '100vh';
          break;
          case 'close':
          this._elem.nativeElement.style.height = '';
          break;
        }
    });
  }

  closeCart() {
    this.cart.setState('close');
  }

  get navigation() {
    return this._navigationService.getNavigation();
  }

}
