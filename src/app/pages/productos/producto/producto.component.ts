import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from '../model/producto.model';
import { ProductosService } from '../service/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  urlUse: string[] = [];
  productoForm: FormGroup = new FormGroup({
    nombreProducto: new FormControl(),
    precio: new FormControl(),
    tipo: new FormControl(),
    stock: new FormControl(),
    descripcion: new FormControl(),
  })
  tipoProducto = [
    {
      id: 0,
      type: 'Moto'
    },
    {
      id: 1,
      type: 'Auto'
    }
  ]

  constructor(
    private ProductoService: ProductosService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.urlUse = this.router.url.split('/')
    if (this.urlUse.includes('edit')) {
      const id = parseInt(this.urlUse[4])
      this.ProductoService.getProductoById(id).subscribe(producto =>
        this.productoForm.setValue({
          nombreProducto: producto.nombreProducto,
          precio: producto.precio,
          tipo: producto.tipo,
          stock: producto.stock,
          descripcion: producto.descripcion,
        })

      )
    }
  }

  create() {
    const Producto: Producto = {
      nombreProducto: this.productoForm.get('nombreProducto')?.value,
      precio: this.productoForm.get('precio')?.value,
      tipo: this.productoForm.get('tipo')?.value,
      stock: this.productoForm.get('stock')?.value,
      descripcion: this.productoForm.get('descripcion')?.value
    }
    this.ProductoService.create(Producto)
      .subscribe(
        (res) => {
          Swal.fire('¡Producto creado!', 'Se ha registrado con éxito el nuevo producto.', 'success'),
            this.router.navigate(['/main/productos'])
        },
        (error) => { Swal.fire('Error al crear el producto', 'Lo siento, ocurrió un error al crear el producto', 'error') }
      );
  }

  edit() {
    const id = parseInt(this.urlUse[4])

    const Producto: Producto = {
      nombreProducto: this.productoForm.get('nombreProducto')?.value,
      precio: this.productoForm.get('precio')?.value,
      tipo: this.productoForm.get('tipo')?.value,
      stock: this.productoForm.get('stock')?.value,
      descripcion: this.productoForm.get('descripcion')?.value
    }

    this.ProductoService.putProducto(id, Producto).subscribe(
      (res) => {
        Swal.fire('¡Producto editado!', 'Los datos se guardaron exitosamente', 'success')
        this.router.navigate(['/main/productos'])
      },
      (error) => { Swal.fire('Error al editar el producto', 'Lo siento, ocurrió un error al editar el producto', 'error') }
    )
  }
}
