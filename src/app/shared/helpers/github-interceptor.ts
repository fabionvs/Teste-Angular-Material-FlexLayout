import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class GithubInterceptor implements HttpInterceptor {
  constructor() {
  }

  url: any;
  valid: boolean;
  regexp: any;

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    request = request.clone({
      url: 'https://api.github.com'  + request.url
    });

    return next.handle(request);

  }

}
