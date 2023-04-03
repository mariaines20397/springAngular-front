import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignInService } from 'src/app/pages/sign-in/service/sign-in.service';

@Injectable({
  providedIn: 'root'
})
export class MainGuard implements CanActivate {
  constructor(private router:Router, private signInService:SignInService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let payload = this.signInService.obtenerPayload(this.signInService.token);
    if (payload == null) {        
        this.router.navigate([''])
        return false;
      }
    return true;
  }

  
}
