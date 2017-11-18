import { RestDataService } from './rest-data.service';
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class TokenInteceptor implements HttpInterceptor {

    constructor(private _injector: Injector) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('interceptor');
        if (req.method === 'PUT' || req.method === 'DELETE' || req.method === 'POST') {
            console.log('interceptor2');
            const restData = this._injector.get(RestDataService);
            req = req.clone({
                setHeaders: {
                    'Authorization': restData.authToken
                }
            });

            return next.handle(req);
        }
        return next.handle(req);
    }
}
