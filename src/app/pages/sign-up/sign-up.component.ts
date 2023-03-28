import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateUsuarioComponent } from './modal/create-usuario/create-usuario.component';
import { Usuario } from './model/usuario.model';
import { UsuariosService } from './service/usuarios.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  registroForm:FormGroup= new FormGroup({
    nombre: new FormControl(),
    apellido: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
  })
  constructor(private router:Router,
    private usuarioService:UsuariosService,
    private modalService:NgbModal){

  }
  back(){
this.router.navigate(['/sign-in'])
  }

  register(){
    const usuario:Usuario={
      nombre: this.registroForm.get('nombre')?.value,
      apellido: this.registroForm.get('apellido')?.value,
      email: this.registroForm.get('email')?.value,
      username: this.registroForm.get('username')?.value,
      password: this.registroForm.get('password')?.value,
    }
    this.usuarioService.create(usuario)
    .subscribe(
      (res)=>{console.log(res);
      
        this.modalService.open(CreateUsuarioComponent, {size:'md'})},
        (error)=>{console.log(error)
        alert("Error en el sistema")}
        
    )

  }
}
