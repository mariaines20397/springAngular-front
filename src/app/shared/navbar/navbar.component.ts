import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router:Router,){}
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
    this.router.navigate(['/'+url])
  }
}
