import { style } from '@angular/animations';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Product } from '../../model/product.model';
import { ModalService } from '../../shared/modal.service';

@Component({
  selector: 'vs-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {
  public product: Product;
  public type: string;
  public state = false;

  constructor(private _modalService: ModalService,
    private _elem: ElementRef) { }

  ngOnInit() {
    this._modalService.getModalData().subscribe((elem) => {
      this.product = elem.product;
      this.type = elem.type;
      this.state = elem.state;
      if (elem.state) {
        this._elem.nativeElement.parentElement.style.height = '100vh';
      }
    });
  }

  closeModal() {
    this.state = !this.state;
    this._elem.nativeElement.parentElement.style.height = '';
  }

}
