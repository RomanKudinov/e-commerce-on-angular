import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/product.service';
import { Product } from '../../model/product.model';

@Component({
  selector: 'vs-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.sass']
})
export class ModalContainerComponent implements OnInit {

  constructor(private _productService: ProductService) { }

  ngOnInit() {
  }

}
