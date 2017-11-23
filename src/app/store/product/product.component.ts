import { Line } from '../../model/line-item.model';
import { ProductService } from '../../shared/product.service';
import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Product } from '../../model/product.model';
import { ActivatedRouteSnapshot, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Option } from '../../model/option.model';
import { CartService } from '../../shared/cart.service';
import { FormBuilder } from '@angular/forms';

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
  public product: Product;
  public selectedImage: Option;
  public ratingWidth: number;
  public quantity = 1;
  private _lineOption: LineOption = {
    color: null
  };

  constructor(private _productService: ProductService,
    private _route: ActivatedRoute,
    private _cart: CartService) {
     }

  ngOnInit() {
      this._route.params.forEach((params: Params) => {
        const id = params['id'];
        this._productService.getProduct(id).subscribe(
          (p) => {
            this.product = p;
            this.selectedImage = p.titleImage;
            this.ratingWidth = (p.rating * 100) / 5;
          }
        );
      });
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
