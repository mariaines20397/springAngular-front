import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Cliente } from '../model/clientes.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private urlEndPoint:string='http://localhost:9090/clientes';
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
  // loadPermissions():Observable<any>{
  //   return of(['admin','user'])
  // }
}
