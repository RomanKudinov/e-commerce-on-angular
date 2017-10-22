import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NavigationService {

  private _url = 'http://localhost:2403/navigation';

  constructor(private _http: HttpClient) { }

  getNavigation() {
    return this._http.get(this._url);
  }

}
