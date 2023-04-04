import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignInService } from 'src/app/pages/sign-in/service/sign-in.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router:Router, private signInService:SignInService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let rol=route.data['rol'] as string;    
    if (this.signInService.hasRole(rol)) {        
      return true;
        
      }
      Swal.fire('Acceso denegado','Lo siento, '+this.signInService.usuario.nombre+' no tienes acceso a este recurso','warning')
      this.router.navigate(['/main'])
      return false;
  }

  
}
