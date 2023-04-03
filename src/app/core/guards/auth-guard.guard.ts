import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
import { catchError, Observable } from 'rxjs';
import { ClientesService } from 'src/app/pages/empleados/service/clientes.service';
import { LoadPermissionsService } from 'src/app/pages/load-permissions.service';
import { SignInService } from 'src/app/pages/sign-in/service/sign-in.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router, private signInService:SignInService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
    return this.isAuthenticated();
  }

  isAuthenticated():boolean{
    let payload = this.signInService.obtenerPayload(this.signInService.token);
    if (payload != null && payload.user_name && payload.user_name.length > 0) {
      this.router.navigate(['/main'])
      return false;
    }
    return true;
  }
  
}
