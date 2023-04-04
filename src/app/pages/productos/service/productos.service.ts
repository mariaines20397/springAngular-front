import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { Producto } from '../model/producto.model';
import { SignInService } from '../../sign-in/service/sign-in.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private urlEndPoint:string='http://localhost:9090/productos';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})
  constructor(
    private http:HttpClient, 
    private router:Router,
    private signInService:SignInService
    ) { }
    
  isNoAutorizado(e:any): boolean{
    if (e.status==401) {
      if (this.signInService.isAuthenticated()) {
        this.signInService.logout();
      }
      this.router.navigate([''])
      return true;
    }
    if (e.status==403) {
      Swal.fire('Acceso denegado','Lo siento, '+this.signInService.usuario.nombre+' no tienes acceso a este recurso','warning')
      this.router.navigate(['/main/productos']);
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
