import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-clientes',
  templateUrl: './edit-clientes.component.html',
  styleUrls: ['./edit-clientes.component.css']
})
export class EditClienteComponent {
  constructor(
    private router:Router,
    private modalService:NgbModal
  ){ }

  close(){
    this.modalService.dismissAll()
    this.router.navigate(['/'])
  }
}
