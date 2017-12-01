import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import { ModalService } from './../../shared/modal.service';
import { Line } from '../../model/line-item.model';
import { ProductService } from '../../shared/product.service';
import { Product } from '../../model/product.model';
import { Option } from '../../model/option.model';
import { CartService } from '../../shared/cart.service';
import { ModalResults } from '../../shared/modal-results.enum';
import { FilterService } from '../../shared/filter.service';

interface LineOption {
  color: Option;
  band?: Option;
  cup?: Option;
}

@Component({
  selector: 'vs-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Input() type = null;
  public selectedImage: Option;
  public quantity = 1;
  private _lineOption: LineOption = {
    color: null
  };

  constructor(private _productService: ProductService,
    private _route: ActivatedRoute,
    private _cart: CartService,
    private _modalService: ModalService,
    private _filterService: FilterService) {
  }

  ngOnInit() {
    this._filterService.missOption = {
      color: null,
      band: null,
      cup: null
    };

    if (this.type === null) {
      this._route.params.forEach((params: Params) => {
        const id = params['id'];
        this._productService.getProduct(id).subscribe(
          (p) => {
            this.product = p;
            this.selectedImage = p.titleImage;
          }
        );
      });
    } else {
      this.selectedImage = this.product.titleImage;
    }
  }

  changeImage(image: Option) {
    this.selectedImage = image;
  }

  setLineOption(lineOption: Option, type: string) {
    switch (type) {
      case 'COLOR':
        this._lineOption.color = lineOption;
        break;
      case 'BAND':
        this._lineOption.band = lineOption;
        break;
      case 'CUP':
        this._lineOption.cup = lineOption;
        break;
    }
  }

  editLineAtCart() {
    this._cart.updateLine(this.product.id, new Line({
      id: this.product.id,
      name: this.product.name,
      link: this.product.link,
      color: this._lineOption.color,
      size: `${this._lineOption.band.title}${this._lineOption.cup.title.toUpperCase()}`,
      price: this.product.price,
      quantity: this.quantity,
      image: this.product.titleImage
    }));
    this._modalService.state.next(ModalResults.Closed);
  }

  addLineToCart() {
    this._cart.addLineToCart(new Line({
      id: this.product.id,
      name: this.product.name,
      link: this.product.link,
      color: this._lineOption.color,
      size: `${this._lineOption.band.title}${this._lineOption.cup.title.toUpperCase()}`,
      price: this.product.price,
      quantity: this.quantity,
      image: this.product.titleImage
    }));
  }
}
