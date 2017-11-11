import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataService {

  private _baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}`;

  constructor(private _http: HttpClient) { }

  getNavigation() {
    return this._http.get(`${this._baseUrl}/navigation`);
  }

}
