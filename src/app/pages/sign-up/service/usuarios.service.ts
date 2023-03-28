import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private urlEndPoint:string='http://localhost:9090';

  constructor(private http:HttpClient) { }
  create(usuario:Usuario) :Observable<Usuario>{
    return this.http.post<Usuario>(this.urlEndPoint+'/usuarios/',usuario);
  }

}
