import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-empleado',
  templateUrl: './create-empleado.component.html',
  styleUrls: ['./create-empleado.component.css']
})
export class CreateEmpleadoComponent {

  constructor(
    private router:Router,
    private modalService:NgbModal
  ){ }

  close(){
    this.modalService.dismissAll()
    this.router.navigate(['/'])
  }
}
