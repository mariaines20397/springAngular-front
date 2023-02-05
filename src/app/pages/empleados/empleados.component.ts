import { Component, OnInit } from '@angular/core';
import { Empleado } from './model/empleado.model';
import { EmpleadosService } from './service/empleados.service';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteEmpleadoComponent } from './modal/delete-empleado/delete-empleado.component';
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit{
  allEmpleados:any;
  allEmpleadosArray:string[]=[];
  closeResult=''
  constructor(private empleadoService:EmpleadosService,
    private router:Router,
    private modalService:NgbModal){

  }
  ngOnInit(): void {
    this.empleadoService.getAllEmpleados().subscribe(data=>{
      this.allEmpleados=Object.values(data)   
      this.allEmpleadosArray=Object.keys(data)       
    })
  
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

  this.modalService.open(DeleteEmpleadoComponent,{size:'md'})
    
  }

 
}
