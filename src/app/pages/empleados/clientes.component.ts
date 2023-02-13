import { Component, OnInit } from '@angular/core';
import { ClientesService } from './service/clientes.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteClienteComponent } from './modal/delete-cliente/delete-clientes.component';

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
    // private permissionService:NgxPermissionsService
    ){

  }
  ngOnInit(): void {
    this.clienteService.getAllClientes().subscribe(data=>{
      this.allClientes=Object.values(data)   
      this.allClientesArray=Object.keys(data)       
    })
  const perm=['ADMIN','EMPLEADO'];
  // this.permissionService.loadPermissions(perm);
  console.log(this.disableButton);
  
}

edit(id:any){
this.router.navigate(['edit/'+id])
}
create(){
  
  this.router.navigate(['/create'])
  console.log('click');
  
  }
  redirect(id:any){
  this.router.navigate(['/'+id])

  this.modalService.open(DeleteClienteComponent,{size:'md'})
    
  }
//   disableButton(isDesabled:boolean){

// if (isDesabled) {
//   document.getElementById('buttonCreate')?.ariaDisabled
// } 
//   }
 
}
