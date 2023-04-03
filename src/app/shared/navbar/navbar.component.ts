import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from 'src/app/pages/sign-in/service/sign-in.service';
import Swal from 'sweetalert2';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router:Router,public signInService:SignInService){
    console.log(signInService.usuario);
    
  }
  optionsNav = [
    {
      routerLink:'/productos',
      option: 'Productos'
    },
    {
      routerLink: '/clientes',
      option: 'Clientes'
    }
  ]

  redirect(url:string){
    this.router.navigate(['/main'+url])
  }

  logout(){
    let username=this.signInService.usuario.nombre
    this.signInService.logout();
    Swal.fire('Logout',username+' has cerrado sesión con éxito. ¡Gracias por tu visita!', 'success');
    this.router.navigate([''])

  }
}
