import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteProductoComponent } from './modal/delete-producto/delete-producto.component';
import { ProductosService } from './service/productos.service';
import { SignInService } from '../sign-in/service/sign-in.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  allProductos:any;
  allProductosArray:string[]=[];
  disableButton:boolean=false
  closeResult=''

  constructor(private productoService:ProductosService,
    private router:Router,
    private modalService:NgbModal,
    public signInService:SignInService ){

  }
  ngOnInit(): void {
    this.productoService.getAllProductos().subscribe(data=>{
      this.allProductos=Object.values(data)   
      this.allProductosArray=Object.keys(data)             
    })

}

edit(id:any){
this.router.navigate(['/main/productos/edit/'+id]);
}
create(){
  
  this.router.navigate(['/main/productos/create']);
  
  }
  redirect(id:any){
  this.router.navigate(['/main/productos'+id])

  this.modalService.open(DeleteProductoComponent,{size:'md'})
    
  }
}
