import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { Usuario } from './model/usuario.model';
import { UsuariosService } from './service/usuarios.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  usuario:Usuario={
    id:0,
    nombre:'',
    apellido:'',
    password:'',
    username:'',
    email:''
  }
  registroForm: FormGroup = new FormGroup({
    nombre: new FormControl(),
    apellido: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
  })
  constructor(private router: Router,
    private usuarioService: UsuariosService,
    private modalService: NgbModal,
    private toastr: ToastrService) {

  }
  back() {
    this.router.navigate([''])
  }

  register() {

    const usuario: Usuario = {
      nombre: this.registroForm.get('nombre')?.value,
      apellido: this.registroForm.get('apellido')?.value,
      email: this.registroForm.get('email')?.value,
      username: this.registroForm.get('username')?.value,
      password: this.registroForm.get('password')?.value,
    }
    console.log(usuario);

    if (usuario.nombre == '' || usuario.nombre == null ||
    usuario.apellido == '' || usuario.apellido == null ||
    usuario.email == '' || usuario.email == null ||
    usuario.username == '' || usuario.username == null ||
    usuario.password == '' || usuario.password == null ) {
      this.toastr.error('Todos los campos son requeridos');
      return;
    } else {
      this.usuarioService.create(usuario)
        .subscribe(
          (res) => {
            console.log(res);
            Swal.fire('Usuario creado', 'Usuario registrado con éxito en el sistema', 'success')
            this.router.navigate([''])
          },
          (error) => {
            console.error(error)
            Swal.fire('Error en el sistema', 'Por favor, vuelve a intentarlo', 'error')
          }

        )
    }


  }


}
