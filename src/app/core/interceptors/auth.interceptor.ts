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
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router:Router,private signInService:SignInService){

  }
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      
    return next.handle(req).pipe(
        catchError(e=>{
            if (e.status==401) {
                if (this.signInService.isAuthenticated()) {
                  this.signInService.logout();
                }
                this.router.navigate([''])
              }
              if (e.status==403) {
                Swal.fire('Acceso denegado','Lo siento, '+this.signInService.usuario.nombre+' no tienes acceso a este recurso','warning')
                this.router.navigate(['/main/productos']);
              }
              return throwError(e);
        })
    );
  }
}
