import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../model/producto.model';
import { ProductosService } from '../service/productos.service';
import Swal from 'sweetalert2';
import { SignInService } from '../../sign-in/service/sign-in.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  producto:Producto={
    id:0,
    nombreProducto:'',
    tipo:'',
    precio:0
  }
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
    public router: Router,
    private activatedRoute: ActivatedRoute,
    public signInService: SignInService) { }

  ngOnInit(): void {
    if (this.router.url.includes('edit')) {
      this.activatedRoute.paramMap.subscribe(params=>{
        let id = params.get('id');
        if (id) {
          this.ProductoService.getProductoById(id)
          .subscribe(producto=>this.producto=producto);
        }
      })
    }
  }

  create() {
    this.ProductoService.create(this.producto)
      .subscribe(
        (res) => {
          Swal.fire('¡Producto '+ res.producto.nombreProducto +' creado!', res.mensaje, 'success'),
          this.router.navigate(['/main/productos'])
        }
      );
  }

  edit() {
    this.ProductoService.putProducto(this.producto).subscribe(
      (res) => {
        Swal.fire('¡Producto '+res.producto.nombreProducto +' editado!', res.mensaje, 'success')
        this.router.navigate(['/main/productos'])
      }
    )
  }
}
