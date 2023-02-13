import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateClienteComponent } from '../modal/create-cliente/create-clientes.component';
import { EditClienteComponent } from '../modal/edit-cliente/edit-clientes.component';
import { Cliente } from '../model/clientes.model';
import { ClientesService } from '../service/clientes.service';

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

  constructor(
    private formBuilder:FormBuilder, 
    private ClienteService:ClientesService,
    private router:Router,
    private modalService:NgbModal){

  }

  ngOnInit(): void {    
    this.urlUse=this.router.url.split('/')
    if (this.urlUse[1]=='edit') {
      const id=parseInt(this.urlUse[2])
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
      res=>
      this.modalService.open(CreateClienteComponent,{size:'md'})
      );
  }

  edit(){
    const id=parseInt(this.urlUse[2])

    const Cliente:Cliente={
      nombreNegocio:this.clienteForm.get('nombreNegocio')?.value,
      direccion: this.clienteForm.get('direccion')?.value,
      tipo:this.clienteForm.get('tipo')?.value,
      cantidadEncargues:this.clienteForm.get('cantidadEncargues')?.value,
      descripcion:this.clienteForm.get('descripcion')?.value
    }
    this.ClienteService.putCliente(id,Cliente).subscribe(
      res=> this.modalService.open(EditClienteComponent,{size:'md'})
    )
  }

  

}
