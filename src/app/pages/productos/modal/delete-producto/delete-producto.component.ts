import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductosService } from '../../service/productos.service';

@Component({
  selector: 'app-delete-producto',
  templateUrl: './delete-producto.component.html',
  styleUrls: ['./delete-producto.component.css']
})
export class DeleteProductoComponent {
  closeResult=''
  urlUse:string[] = []
  constructor(
    private router:Router,
    private modalService:NgbModal,
	private ProductosService:ProductosService
  ){ }
  ngOnInit(){
    this.urlUse=this.router.url.split('/');

  }
  open(content:any) {
	this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
		(result) => {
			this.closeResult = `Closed with: ${result}`;
		},
		(reason) => {
			this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		},
	);
	const id=parseInt(this.urlUse[2])

    this.ProductosService.deleteProducto(id).subscribe(
      res=> this.router.navigate(['/productos'])
    )
this.modalService.dismissAll();
}
private getDismissReason(reason: any): string {
	if (reason === ModalDismissReasons.ESC) {
		return 'by pressing ESC';
	} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
		return 'by clicking on a backdrop';
	} else {
		return `with: ${reason}`;
	}
}
close(){
this.modalService.dismissAll();
 this.router.navigate(['/productos'])

}
}
