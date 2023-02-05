import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateEmpleadoComponent } from '../modal/create-empleado/create-empleado.component';
import { EditEmpleadoComponent } from '../modal/edit-empleado/edit-empleado.component';
import { Empleado } from '../model/empleado.model';
import { EmpleadosService } from '../service/empleados.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit{
  urlUse:string[] = []
  oneEmpleado={}
  empleadoForm:FormGroup=new FormGroup ({
    nombre: new FormControl(),
    apellido: new FormControl(),
    edad: new FormControl(),
    puesto: new FormControl()
  })

  constructor(
    private formBuilder:FormBuilder, 
    private empleadoService:EmpleadosService,
    private router:Router,
    private modalService:NgbModal){

  }

  ngOnInit(): void {    
    this.urlUse=this.router.url.split('/')
    if (this.urlUse[1]=='edit') {
      const id=parseInt(this.urlUse[2])
      this.empleadoService.getEmpleadoById(id).subscribe(empleado=>        
       this.empleadoForm.setValue({
        nombre:empleado.nombre,
        apellido:empleado.apellido,
        edad:empleado.edad,
        puesto:empleado.puesto
       })
       
      )
    }
  }

  create(){
    const empleado:Empleado={
      nombre:this.empleadoForm.get('nombre')?.value,
      apellido: this.empleadoForm.get('apellido')?.value,
      edad:this.empleadoForm.get('edad')?.value,
      puesto:this.empleadoForm.get('puesto')?.value
    }
    this.empleadoService.create(empleado)
    .subscribe(
      res=>
      this.modalService.open(CreateEmpleadoComponent,{size:'md'})
      );
  }

  edit(){
    const id=parseInt(this.urlUse[2])

    const empleado:Empleado={
      nombre:this.empleadoForm.get('nombre')?.value,
      apellido: this.empleadoForm.get('apellido')?.value,
      edad:this.empleadoForm.get('edad')?.value,
      puesto:this.empleadoForm.get('puesto')?.value
    }
    this.empleadoService.putEmpleado(id,empleado).subscribe(
      res=> this.modalService.open(EditEmpleadoComponent,{size:'md'})
    )
  }

  

}
