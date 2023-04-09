import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Cliente } from '../model/clientes.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private urlEndPoint: string = 'http://localhost:9090/clientes';

  constructor(
    private http: HttpClient,
    private router:Router
  ) { }


  getAllClientes(): Observable<Cliente> {
    return this.http.get<Cliente>(this.urlEndPoint);
  }

  create(cliente: Cliente): Observable<any> {
    return this.http.post<any>(this.urlEndPoint + '/create', cliente);
  }

  getClienteById(id: any): Observable<any> {
    return this.http.get<any>((this.urlEndPoint) + '/' + id).pipe(
      catchError(e=>{
        this.router.navigate(['/main/clientes']);
        return throwError(e);
      })
    );
  }

  putCliente(cliente: Cliente): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/edit/${cliente.id}`, cliente);
  }

  deleteCliente(id: number): Observable<any> {
    return this.http.delete<any>((this.urlEndPoint) + '/' + id);
  }
}
