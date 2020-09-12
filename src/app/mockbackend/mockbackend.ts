import { HttpHandler, HttpRequest, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import * as posts from './posts.json';

const urls = [ 
    {
        url: 'https://localhost:8080/posts',
        json: posts
    }
    ];


@Injectable()
export class HttpMockRequestInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {        
        console.log('Intercepted httpCall' + request.url);
        return next.handle(request);
    }
}