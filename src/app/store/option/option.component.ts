import { Component, OnInit, Input, ElementRef, ContentChild, Renderer2, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { map, merge } from 'rxjs/operators';

import { Option } from '../../model/product.model';
import { FilterService } from '../../shared/filter.service';


@Component({
  selector: 'vs-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.sass']
})
export class OptionComponent implements OnInit {
  @Input() option: Option;
  @Input() type: string;
  @Input() index: number;
  @Output() title = new EventEmitter<string>();
  public state = false;
  public miss = false;


  constructor(private _filterService: FilterService) {
  }

  ngOnInit() {
    this._filterService.getItem().subscribe((item) => {
      this.filterOption(item);
    });
  }

  changeState(type: string, state: boolean) {
    if (type === 'color') {
      this.state = state;
    }
  }

  private filterOption(missItem) {
    for (const item in missItem) {
      if (missItem[item] !== null) {
        const missing = missItem[item].some(elem => elem === this.option.title);
        if (missing) {
          this.miss = missing;
          return;
        }

        this.miss = missing;
      }
    }
    this.miss = false;
  }

  chooseOption(title: string) {
    if (!this.miss) {
      this.title.emit(title);
      if (this.option.miss) {
        this._filterService.sendItem(this.option.miss, this.type);
        return;
      }
      this._filterService.sendItem(null, this.type);
    }
  }
}
