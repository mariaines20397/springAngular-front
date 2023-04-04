import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Cliente } from '../model/clientes.model';
import { Router } from '@angular/router';
import { SignInService } from '../../sign-in/service/sign-in.service';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private urlEndPoint:string='http://localhost:9090/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  
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
      this.router.navigate(['/main/clientes']);
      return true;
    }
    return false;
  }
  getAllClientes():Observable<Cliente>{
    return this.http.get<Cliente>(this.urlEndPoint).pipe(
      catchError(e=>{
        this.isNoAutorizado(e);
        return throwError(e);
      })
    )
  }

  create(cliente:Cliente) :Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndPoint+'/create',cliente).pipe(
      catchError(e=>{
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }

getClienteById(id:number):Observable<Cliente>{
    return this.http.get<Cliente>((this.urlEndPoint)+'/'+id).pipe(
      catchError(e=>{
        this.isNoAutorizado(e);
        return throwError(e);
      })
    )
  }

  putCliente(id:number,cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>((this.urlEndPoint)+'/edit/'+id,cliente).pipe(
      catchError(e=>{
        this.isNoAutorizado(e);
        return throwError(e);
      })
    )
  }

  deleteCliente(id:number):Observable<Cliente>{
    return this.http.delete<Cliente>((this.urlEndPoint)+'/'+id).pipe(
      catchError(e=>{
        this.isNoAutorizado(e);
        return throwError(e);
      })
    )
  }
}
