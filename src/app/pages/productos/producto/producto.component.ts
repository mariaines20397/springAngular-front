import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateProductoComponent } from '../modal/create-producto/create-producto.component';
import { EditProductoComponent } from '../modal/edit-producto/edit-producto.component';
import { Producto } from '../model/producto.model';
import { ProductosService } from '../service/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  urlUse:string[] = []
  oneProducto={}
  productoForm:FormGroup=new FormGroup ({
    nombreProducto: new FormControl(),
    precio: new FormControl(),
    tipo: new FormControl(),
    stock: new FormControl(),
    descripcion: new FormControl(),
  })
  tipoProducto=[
    {
      id:0,
      type:'Moto'
    },
    {
      id:1,
      type:'Auto'
    }
  ]

  constructor(
    private ProductoService:ProductosService,
    private router:Router,
    private modalService:NgbModal){

  }

  ngOnInit(): void {    
    this.urlUse=this.router.url.split('/')
    if (this.urlUse[2]=='edit') {
      const id=parseInt(this.urlUse[3])
      this.ProductoService.getProductoById(id).subscribe(producto=>        
       this.productoForm.setValue({
        nombreProducto:producto.nombreProducto,
        precio:producto.precio,
        tipo:producto.tipo,
        stock:producto.stock,
        descripcion:producto.descripcion,
       })
       
      )
    }
  }

  create(){
    const Producto:Producto={
      nombreProducto:this.productoForm.get('nombreProducto')?.value,
      precio: this.productoForm.get('precio')?.value,
      tipo:this.productoForm.get('tipo')?.value,
      stock:this.productoForm.get('stock')?.value,
      descripcion:this.productoForm.get('descripcion')?.value
    }
    this.ProductoService.create(Producto)
    .subscribe(
      res=>
      this.modalService.open(CreateProductoComponent,{size:'md'})
      );
  }

  edit(){
    const id=parseInt(this.urlUse[3])

    const Producto:Producto={
      nombreProducto:this.productoForm.get('nombreProducto')?.value,
      precio: this.productoForm.get('precio')?.value,
      tipo:this.productoForm.get('tipo')?.value,
      stock:this.productoForm.get('stock')?.value,
      descripcion:this.productoForm.get('descripcion')?.value
    }
    
    this.ProductoService.putProducto(id,Producto).subscribe(
      res=> this.modalService.open(EditProductoComponent,{size:'md'})
    )
  }
}
