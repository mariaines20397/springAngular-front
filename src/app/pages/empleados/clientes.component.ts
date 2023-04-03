import { Component, OnInit } from '@angular/core';
import { ClientesService } from './service/clientes.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteClienteComponent } from './modal/delete-cliente/delete-clientes.component';
import { SignInService } from '../sign-in/service/sign-in.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  allClientes:any;
  allClientesArray:string[]=[];
  disableButton:boolean=false
  closeResult=''
  constructor(private clienteService:ClientesService,
    private router:Router,
    private modalService:NgbModal,
    public signInService:SignInService
    ){

  }
  ngOnInit(): void {
    this.clienteService.getAllClientes().subscribe(data=>{
      this.allClientes=Object.values(data)   
      this.allClientesArray=Object.keys(data)       
    })
}

edit(id:any){
this.router.navigate(['/main/clientes/edit/'+id])
}
create(){
  
  this.router.navigate(['/main/clientes/create']);
  
  }
  redirect(id:any){
  this.router.navigate(['/main/clientes'+id])

  this.modalService.open(DeleteClienteComponent,{size:'md'})
    
  }
 
}
