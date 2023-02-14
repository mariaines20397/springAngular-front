import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent {
  constructor(
    private router:Router,
    private modalService:NgbModal
  ){ }

  close(){
    this.modalService.dismissAll()
    this.router.navigate(['/productos'])
  }
}
