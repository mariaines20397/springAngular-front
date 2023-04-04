import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private urlEndPoint: string = 'http://localhost:9090/productos';

  constructor(
    private http: HttpClient
  ) { }


  getAllProductos(): Observable<Producto> {
    return this.http.get<Producto>(this.urlEndPoint)
  };

  create(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.urlEndPoint + '/create', producto)
  };

  getProductoById(id: number): Observable<Producto> {
    return this.http.get<Producto>((this.urlEndPoint) + '/' + id)
  }

  putProducto(id: number, producto: Producto): Observable<Producto> {
    return this.http.put<Producto>((this.urlEndPoint) + '/edit/' + id, producto)
  }

  deleteProducto(id: number): Observable<Producto> {
    return this.http.delete<Producto>((this.urlEndPoint) + '/' + id)
  }
}
