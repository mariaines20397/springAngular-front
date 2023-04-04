import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from './service/productos.service';
import { SignInService } from '../sign-in/service/sign-in.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  allProductos: any;
  allProductosArray: string[] = [];

  constructor
    (private productoService: ProductosService,
      private router: Router,
      public signInService: SignInService
    ) { }
  ngOnInit(): void {
    this.fillTable()
  }
  fillTable() {
    this.productoService.getAllProductos().subscribe(data => {
      this.allProductos = Object.values(data)
      this.allProductosArray = Object.keys(data)
    })
  }

  edit(id: any) {
    this.router.navigate(['/main/productos/edit/' + id]);
  }
  create() {
    this.router.navigate(['/main/productos/create']);
  }
  redirect(id: any) {
    this.productoService.getProductoById(id).subscribe(producto => {
      Swal.fire({
        title: 'Estas por eliminar ' + producto.nombreProducto + ' del listado',
        text: '¿Estas seguro que quieres eliminar este producto?',
        showDenyButton: true,
        confirmButtonText: 'Si, eliminar',
        denyButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          this.productoService.deleteProducto(id).subscribe(
            (res) => {
              Swal.fire('¡Producto eliminado!', 'El producto se eliminó con éxito', 'success')
              this.fillTable();
            },
            (error) => {
              Swal.fire('Error al eliminar producto', 'Lo siento, hubo un error al eliminar el producto', 'error')
            }
          )
        } else if (result.isDenied) {
          Swal.fire('El producto no se eliminó', 'El producto sigue registrado en el sistema', 'info')
        }
      })
    })


  }
}
