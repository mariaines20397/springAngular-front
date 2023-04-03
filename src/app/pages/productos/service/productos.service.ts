import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { Producto } from '../model/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private urlEndPoint:string='http://localhost:9090/productos';
  // private urlEndPointPost:string='http://localhost:9090/create';
  // private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http:HttpClient, private router:Router) { }

  isNoAutorizado(e:any): boolean{
    if (e.status==401 || e.status==403) {
      this.router.navigate(['/sign-in'])
      return true;
    }
    return false;
  }
  getAllProductos():Observable<Producto>{
    
    return this.http.get<Producto>(this.urlEndPoint).pipe(
      catchError(e=>{
        this.isNoAutorizado(e);
        return throwError(e);
      })
    )
  };

  create(producto:Producto) :Observable<Producto>{
    return this.http.post<Producto>(this.urlEndPoint+'/create',producto).pipe(
      catchError(e=>{
        this.isNoAutorizado(e);
        return throwError(e);
      })
    )
  };

getProductoById(id:number):Observable<Producto>{
    return this.http.get<Producto>((this.urlEndPoint)+'/'+id).pipe(
      catchError(e=>{
        this.isNoAutorizado(e);
        return throwError(e);
      })
    )
  }

  putProducto(id:number,producto:Producto):Observable<Producto>{
    return this.http.put<Producto>((this.urlEndPoint)+'/edit/'+id,producto).pipe(
      catchError(e=>{
        this.isNoAutorizado(e);
        return throwError(e);
      })
    )
  }

  deleteProducto(id:number):Observable<Producto>{
    return this.http.delete<Producto>((this.urlEndPoint)+'/'+id).pipe(
      catchError(e=>{
        this.isNoAutorizado(e);
        return throwError(e);
      })
    )
  }
}
