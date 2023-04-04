import { Component, OnInit } from '@angular/core';
import { ClientesService } from './service/clientes.service';
import { Router } from '@angular/router';
import { SignInService } from '../sign-in/service/sign-in.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  allClientes: any;
  allClientesArray: string[] = [];
  disableButton: boolean = false
  closeResult = ''
  constructor(private clienteService: ClientesService,
    private router: Router,
    public signInService: SignInService
  ) {

  }
  ngOnInit(): void {
    this.fillTable()
  }
  fillTable() {
    this.clienteService.getAllClientes().subscribe(data => {
      this.allClientes = Object.values(data)
      this.allClientesArray = Object.keys(data)
    })
  }
  edit(id: any) {
    this.router.navigate(['/main/clientes/edit/' + id])
  }
  create() {
    this.router.navigate(['/main/clientes/create']);
  }
  redirect(id: any) {
    this.clienteService.getClienteById(id).subscribe(cliente => {
      Swal.fire({
        title: 'Estas por eliminar ' + cliente.nombreNegocio + ' del listado',
        text: '¿Estas seguro que quieres eliminar a este cliente?',
        showDenyButton: true,
        confirmButtonText: 'Si, eliminar',
        denyButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          this.clienteService.deleteCliente(id).subscribe(
            (res) => {
              Swal.fire('Cliente eliminado!', 'El cliente se eliminó con éxito', 'success')
              this.fillTable();
            },
            (error) => {
              Swal.fire('Error al eliminar al cliente', 'Lo siento, hubo un error al eliminar el cliente', 'error')
            }
          )
        } else if (result.isDenied) {
          Swal.fire('El cliente no se eliminó', 'El cliente sigue registrado en el sistema', 'info')
        }
      })
    })
  }


}
