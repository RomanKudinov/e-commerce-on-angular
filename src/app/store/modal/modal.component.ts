import { style } from '@angular/animations';
import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Product } from '../../model/product.model';
import { ModalService } from '../../shared/modal.service';
import { Subject } from 'rxjs/Subject';
import { ModalResults } from '../../shared/modal-results.enum';

@Component({
  selector: 'vs-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {
  public product: Product;
  public type: string;
  public state: Subject<ModalResults>;

  constructor(private _modalService: ModalService,
    private _elem: ElementRef) {
      this.state = new Subject();
    }

  ngOnInit() {
    // this._elem.nativeElement.parentElement.style.height = '100vh';
  }

  public getModalState(): Subject<ModalResults> {
    return this.state;
  }

  close() {
    this.state.next(ModalResults.Closed);
    // this._elem.nativeElement.parentElement.style.height = '';
  }

}
