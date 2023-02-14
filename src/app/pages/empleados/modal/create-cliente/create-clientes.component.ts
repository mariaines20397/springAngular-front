import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-clientes',
  templateUrl: './create-clientes.component.html',
  styleUrls: ['./create-clientes.component.css']
})
export class CreateClienteComponent {

  constructor(
    private router:Router,
    private modalService:NgbModal
  ){ }

  close(){
    this.modalService.dismissAll()
    this.router.navigate(['/clientes'])
  }
}
