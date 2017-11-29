import { ProductComponent } from './product/product.component';
import { ProductService } from '../shared/product.service';
import { Component, OnInit, OnChanges, ViewContainerRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs/Observable';
import { ModalService } from '../shared/modal.service';
import { ModalComponent } from './modal/modal.component';
import { ModalResults } from '../shared/modal-results.enum';

@Component({
  selector: 'vs-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.sass']
})
export class StoreComponent implements OnInit {
  public widthImg = 280;
  public heightImg = 374;
  public selectedCategory: string[] = null;
  public products: Observable<Product[]>;

  constructor(private _productService: ProductService,
    private _activateRoute: ActivatedRoute,
    private _modalService: ModalService) {

  }

  ngOnInit() {
    this._activateRoute.params.subscribe(({ category = null, subcategory = null }) => {
      this.selectedCategory = [category, subcategory];
      this.products = this._productService.getProducts([category, subcategory]);
    });
  }

  showModal(product: Product) {
    const $modalState = this._modalService.showModal(ModalComponent, {
      product,
      type: 'ADD'
    });

    $modalState.subscribe(
      (x: ModalResults) => {
        if (x === ModalResults.Closed) {
          console.log(this._modalService.modalContainer.element);
          this._modalService.modalContainer.clear();
          $modalState.unsubscribe();
        }
      });
  }

  getCategories(): string[] {
    return this._activateRoute.snapshot.url.map((segment) => segment.path);
  }
}
