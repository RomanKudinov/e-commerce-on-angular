import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { NavItem } from '../model/nav-item.model';

@Injectable()
export class NavigationService {
  public navigation: NavItem[];

  constructor(private _data: RestDataService) {
    this._data.getNavigation()
      .subscribe((res: NavItem[]) => {
        this.navigation = res;
      });
  }

  getNavigation(): NavItem[] {
    return this.navigation;
  }
}

