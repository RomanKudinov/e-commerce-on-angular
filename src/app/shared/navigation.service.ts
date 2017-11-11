import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';

@Injectable()
export class NavigationService {
  public navigation: any;

  constructor(private _data: RestDataService) {
    this._data.getNavigation()
      .subscribe((res) => {
        this.navigation = res;
      });
  }

  getNavigation(): any {
    return this.navigation;
  }
}

