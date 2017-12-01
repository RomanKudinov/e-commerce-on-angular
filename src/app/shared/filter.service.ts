import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Option } from '../model/option.model';
import { Observable } from 'rxjs/Observable';

interface MissOption {
  color: any;
  band: any;
  cup: any;
}

@Injectable()
export class FilterService {
  private $items = new Subject<MissOption>();
  public missOption: MissOption = {
    color: null,
    band: null,
    cup: null
  };

  constructor() { }

  sendOption(item: any, type: string) {
    switch (type) {
      case 'color':
      this.missOption.color = item;
        break;
      case 'band':
      this.missOption.band = item;
        break;
      case 'cup':
      this.missOption.cup = item;
    }
    this.$items.next(this.missOption);
  }

  getItem(): Observable<MissOption> {
    return this.$items.asObservable();
  }
}
