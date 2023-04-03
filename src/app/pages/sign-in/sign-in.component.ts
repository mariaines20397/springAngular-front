import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuario } from '../sign-up/model/usuario.model';
import { SignInService } from './service/sign-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  usuario: Usuario={
    username:'',
    password:'',
    email:'',
    nombre:'',
    apellido:''
  };
  // signInForm:FormGroup=new FormGroup ({
  //   username: new FormControl(),
  //   password: new FormControl(),
  // })
  constructor(
    private signInService:SignInService, 
    private router:Router
    ){
  }

  login(){
    console.log(this.usuario);
    
    if (this.usuario.username == null || this.usuario.username == '' ||
      this.usuario.password == null || this.usuario.password == '') {
      Swal.fire('Error login', 'Usuario o contraseña vacias!', 'error')
      return;
    }

    this.signInService.login(this.usuario).subscribe(
      (res)=>{console.log(res);
        // let payload=JSON.parse(atob(res.access_token.split(".")[1]));
        this.signInService.guardarUsuario(res.access_token);
        this.signInService.guardarToken(res.access_token);
        this.router.navigate(['/main']);
        Swal.fire('Bienvenido','¡Hola '+res.nombre+'! Has iniciado sesión con éxito.')
      },
      (error)=>{
        if (error.status == 400) {
          Swal.fire('Error login', 'Usuario o contraseña incorrectas!', 'error');
        }
      }
    )
  }
}
