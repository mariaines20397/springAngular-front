import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from '../model/clientes.model';
import { ClientesService } from '../service/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{
  urlUse:string[] = []
  oneCliente={}
  clienteForm:FormGroup=new FormGroup ({
    nombreNegocio: new FormControl(),
    direccion: new FormControl(),
    tipo: new FormControl(),
    cantidadEncargues: new FormControl(),
    descripcion: new FormControl(),
  })
  tipoComercio=[
    {
      id:0,
      type:'Moto'
    },
    {
      id:1,
      type:'Auto'
    }
  ]

  constructor(
    private formBuilder:FormBuilder, 
    private ClienteService:ClientesService,
    private router:Router,
    private modalService:NgbModal){

  }

  ngOnInit(): void {    
    this.urlUse=this.router.url.split('/')
    if (this.urlUse.includes('edit')) {
      const id=parseInt(this.urlUse[4])
      this.ClienteService.getClienteById(id).subscribe(cliente=>  
       this.clienteForm.setValue({
        nombreNegocio:cliente.nombreNegocio,
        direccion:cliente.direccion,
        tipo:cliente.tipo,
        cantidadEncargues:cliente.cantidadEncargues,
        descripcion:cliente.descripcion,
       })
       
      )
    }
  }

  create(){
    const Cliente:Cliente={
      nombreNegocio:this.clienteForm.get('nombreNegocio')?.value,
      direccion: this.clienteForm.get('direccion')?.value,
      tipo:this.clienteForm.get('tipo')?.value,
      cantidadEncargues:this.clienteForm.get('cantidadEncargues')?.value,
      descripcion:this.clienteForm.get('descripcion')?.value
    }
    this.ClienteService.create(Cliente)
    .subscribe(
      (res) => {
        Swal.fire('¡Cliente creado!', 'Se ha registrado con éxito el nuevo cliente.', 'success'),
          this.router.navigate(['/main/clientes'])
      },
      (error) => { Swal.fire('Error al crear el cliente', 'Lo siento, ocurrió un error al crear el cliente', 'error') }
    );
  }

  edit(){
    const id=parseInt(this.urlUse[4])

    const Cliente:Cliente={
      nombreNegocio:this.clienteForm.get('nombreNegocio')?.value,
      direccion: this.clienteForm.get('direccion')?.value,
      tipo:this.clienteForm.get('tipo')?.value,
      cantidadEncargues:this.clienteForm.get('cantidadEncargues')?.value,
      descripcion:this.clienteForm.get('descripcion')?.value
    }
    this.ClienteService.putCliente(id,Cliente).subscribe(
      (res) => {
        Swal.fire('¡Cliente editado!', 'Los datos se guardaron exitosamente', 'success')
        this.router.navigate(['/main/clientes'])
      },
      (error) => { Swal.fire('Error al editar el cliente', 'Lo siento, ocurrió un error al editar el cliente', 'error') }
    )
  }

  

}
