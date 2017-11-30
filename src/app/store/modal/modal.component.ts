import { style } from '@angular/animations';
import { Component, OnInit, ElementRef, Input } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { Product } from '../../model/product.model';
import { ModalService } from '../../shared/modal.service';
import { ModalResults } from '../../shared/modal-results.enum';

@Component({
  selector: 'vs-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {
  public product: Product;
  public type: string;

  constructor(private _modalService: ModalService,
    private _elem: ElementRef) {
    }

  ngOnInit() {
    // this._elem.nativeElement.parentElement.style.height = '100vh';
  }

  close() {
    this._modalService.state.next(ModalResults.Closed);
    // this._elem.nativeElement.parentElement.style.height = '';
  }

}
