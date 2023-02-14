import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Cliente } from '../model/clientes.model';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private urlEndPoint:string='http://localhost:9090/clientes';
  // private urlEndPointPost:string='http://localhost:9090/create';
  // private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http:HttpClient) { }

  getAllClientes():Observable<Cliente>{
    return this.http.get<Cliente>(this.urlEndPoint)
  }

  create(cliente:Cliente) :Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndPoint+'/create',cliente);
  }

getClienteById(id:number):Observable<Cliente>{
    return this.http.get<Cliente>((this.urlEndPoint)+'/'+id)
  }

  putCliente(id:number,cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>((this.urlEndPoint)+'/edit/'+id,cliente)
  }

  deleteCliente(id:number):Observable<Cliente>{
    return this.http.delete<Cliente>((this.urlEndPoint)+'/'+id)
  }
  // loadPermissions():Observable<any>{
  //   return of(['admin','user'])
  // }
}
