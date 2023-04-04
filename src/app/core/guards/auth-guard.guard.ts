import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignInService } from 'src/app/pages/sign-in/service/sign-in.service';
import Swal from 'sweetalert2';

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
      if (this.isTokenExpered()) {
        let username=this.signInService.usuario.nombre
        this.signInService.logout();
        Swal.fire('Token expirado','Lo sentimos, '+username+' tu token expiró. Por favor inicia sesión nuevamente', 'info');

        this.router.navigate(['']);
        return false;
      }
      this.router.navigate(['/main'])
      return false;
    }
    return true;
  }

  isTokenExpered():boolean{
    let token=this.signInService.token;
    let payload = this.signInService.obtenerPayload(token);
    let dateNow= new Date().getTime() / 1000;

    if (payload.exp < dateNow) {
      return true;
    }
    return false;
  }
  
}
