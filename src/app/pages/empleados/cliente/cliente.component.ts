import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../model/clientes.model';
import { ClientesService } from '../service/clientes.service';
import Swal from 'sweetalert2';
import { SignInService } from '../../sign-in/service/sign-in.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  cliente: Cliente = {
    id: 0,
    nombreNegocio: '',
    tipo: '',
    direccion: '',
    descripcion: '',
    cantidadEncargues: 0
  }
  tipoComercio = [
    {
      id: 0,
      type: 'Moto'
    },
    {
      id: 1,
      type: 'Auto'
    }
  ]

  constructor(
    private ClienteService: ClientesService,
    public router: Router,
    private activatedRoute: ActivatedRoute,
    public signInService: SignInService) { }


  ngOnInit(): void {
    if (this.router.url.includes('edit')) {
      this.activatedRoute.paramMap.subscribe(params => {
        let id = params.get('id');
        if (id) {
          this.ClienteService.getClienteById(id)
            .subscribe(cliente => this.cliente = cliente)
        }
      })
    }
  }

  create() {
    this.ClienteService.create(this.cliente)
      .subscribe(
        (res) => {
          Swal.fire('¡Cliente ' + res.cliente.nombreNegocio + ' creado!', res.mensaje, 'success'),
            this.router.navigate(['/main/clientes'])
        }
      );
  }

  edit() {
    this.ClienteService.putCliente(this.cliente).subscribe(
      (res) => {
        Swal.fire('¡Cliente ' + res.cliente.nombreNegocio + ' editado!', res.mensaje, 'success')
        this.router.navigate(['/main/clientes'])
      }
    )
  }
}
