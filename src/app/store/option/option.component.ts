import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { map, merge } from 'rxjs/operators';

import { Image } from '../../model/product.model';
import { Option } from '../../model/product.model';

@Component({
  selector: 'vs-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.sass']
})
export class OptionComponent implements OnInit {
  @Input() image: Image = null;
  @Input() option: Option = null;
  public state = false;
  constructor(private _elem: ElementRef) { }

  ngOnInit() {
    if (this.image !== null) {
      const $mouseenter = fromEvent(this._elem.nativeElement, 'mouseenter').pipe(
        map((e) => true)
      );

      const $mouseleave = fromEvent(this._elem.nativeElement, 'mouseleave').pipe(
        map((e) => false)
      );

        $mouseenter.pipe(
          merge($mouseleave)
        ).subscribe((s) => {
          this.state = s;
        });
    }
  }
}
