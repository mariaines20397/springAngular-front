import { Component } from '@angular/core';
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
  redirect(id: number) {
    this.productoService.getProductoById(id).subscribe(producto => {
      Swal.fire({
        title: 'Estas por eliminar ' + producto.nombreProducto + ' del listado de productos',
        text: '¿Estas seguro que quieres eliminarlo?',
        showDenyButton: true,
        confirmButtonText: 'Si, eliminar',
        denyButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          this.productoService.deleteProducto(id).subscribe(
            (res) => {
              this.fillTable();
              Swal.fire('Producto ' + producto.nombreProducto + ' eliminado', res.mensaje, 'success');
            }
          )
        } else if (result.isDenied) {
          Swal.fire('El producto no se eliminó', 'El producto sigue registrado en el sistema', 'info')
        }
      })
    })


  }
}
