import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Producto } from '../model/producto.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private urlEndPoint: string = 'http://localhost:9090/productos';

  constructor(
    private http: HttpClient,
    private router:Router
  ) { }


  getAllProductos(): Observable<Producto> {
    return this.http.get<Producto>(this.urlEndPoint);
  };

  create(producto: Producto): Observable<any> {
    return this.http.post<any>(this.urlEndPoint + '/create', producto);
  };

  getProductoById(id:any): Observable<any> {
    return this.http.get<any>((this.urlEndPoint) + '/' + id).pipe(
      catchError(e=>{
        this.router.navigate(['/main/productos']);
        return throwError(e);
      })
    );
  }

  putProducto(producto: Producto): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/edit/${producto.id}`, producto);
  }

  deleteProducto(id: number): Observable<any> {
    return this.http.delete<any>((this.urlEndPoint) + '/' + id);
  }
}
