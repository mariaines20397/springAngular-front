import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable, catchError, throwError } from 'rxjs';
import { SignInService } from 'src/app/pages/sign-in/service/sign-in.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router:Router,private signInService:SignInService){

  }
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      
    return next.handle(req).pipe(
        catchError(e=>{
            if (e.status==404) {             
                console.error(e.error.mensaje);
                Swal.fire("Ocurrió un error","Lo siento, "+e.error.mensaje,'error');
              }
              if (e.status==500) {
                console.error(e.error.mensaje);
                console.error(e.error.error);
                Swal.fire('Ocurrió un error','Lo siento, '+e.error.mensaje,'error');
              }
              if (e.status == 400) {
                console.error(e.error.errors);
                this.signInService.errors = e.error.errors;               
              }

              return throwError(e);
              
              
        })
    );
  }
}
