import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-empleado',
  templateUrl: './edit-empleado.component.html',
  styleUrls: ['./edit-empleado.component.css']
})
export class EditEmpleadoComponent {
  constructor(
    private router:Router,
    private modalService:NgbModal
  ){ }

  close(){
    this.modalService.dismissAll()
    this.router.navigate(['/'])
  }
}
