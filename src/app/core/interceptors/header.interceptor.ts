import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { SignInService } from 'src/app/pages/sign-in/service/sign-in.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private signInService:SignInService){

  }
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      let token=this.signInService.token
      if (token != null) {
        const authReq= req.clone({
          headers:req.headers.set('Authorization','Bearer '+token)
        })
    return next.handle(authReq);

      }
    return next.handle(req);
  }
}
