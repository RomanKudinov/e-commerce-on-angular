import { ProductService } from '../../shared/product.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Product, Image } from '../../model/product.model';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'vs-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  public product: Product;
  public images: Image[];
  public selectedImage: Image;
  public ratingWidth: number;
  public colorTitle: string;
  public bandSizeTitle: string;
  public cupSizeTitle: string;
  public quantity = 1;

  constructor(private _productService: ProductService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    const id = this._route.snapshot.params['id'];

    this._productService.getProduct(id).subscribe(
      (p) => {
        this.product = p;
        this.images = p.images;
        this.selectedImage = p.titleImage;
        this.ratingWidth = (p.rating * 100) / 5;
      }
    );
  }

  changeImage(image: Image) {
    this.selectedImage = image;
  }

  changeTitle(title: string, section: string) {
    switch (section) {
      case 'color':
        this.colorTitle = title;
        break;
      case 'bandSize':
        this.bandSizeTitle = title;
        break;
      case 'cupSize':
        this.cupSizeTitle = title;
        break;
    }
  }

  changeQuantity(type: string) {
    switch (type) {
      case 'minus':
        this.quantity -= 1;
        break;
      case 'plus':
        this.quantity += 1;
        break;
    }
  }

}
