import { RestDataService } from './rest-data.service';
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class TokenInteceptor implements HttpInterceptor {

    constructor(private _injector: Injector) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (req.method === 'PUT' || req.method === 'DELETE') {
            const restData = this._injector.get(RestDataService);
            const reqClone = req.clone({headers: req.headers.set('Authorization', restData.authToken)});

            return next.handle(reqClone);
        }
        return next.handle(req);
    }
}
