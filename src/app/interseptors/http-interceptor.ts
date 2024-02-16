import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  private apiKey = 'c6b5ac88f7msh192c3d2e63a0e92p17799djsn375994122d42';

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = request.clone({
      setHeaders: {
        'X-RapidAPI-Key': this.apiKey
      }
    });
    return next.handle(authReq);
  }
}
