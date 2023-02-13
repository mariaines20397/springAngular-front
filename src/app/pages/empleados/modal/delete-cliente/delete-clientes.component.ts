import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientesService } from '../../service/clientes.service';

@Component({
  selector: 'app-delete-clientes',
  templateUrl: './delete-clientes.component.html',
  styleUrls: ['./delete-clientes.component.css']
})
export class DeleteClienteComponent implements OnInit {
  closeResult=''
  urlUse:string[] = []
  constructor(
    private router:Router,
    private modalService:NgbModal,
	private clienteService:ClientesService
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
	const id=parseInt(this.urlUse[1])

    this.clienteService.deleteCliente(id).subscribe(
      res=> this.router.navigate(['/'])
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
 this.router.navigate(['/'])

}



}
