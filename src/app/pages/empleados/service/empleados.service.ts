import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../model/empleado.model';
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private urlEndPoint:string='http://localhost:9090';
  // private urlEndPointPost:string='http://localhost:9090/create';
  // private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http:HttpClient) { }

  getAllEmpleados():Observable<Empleado>{
    return this.http.get<Empleado>(this.urlEndPoint)
  }

  create(empleado:Empleado) :Observable<Empleado>{
    return this.http.post<Empleado>(this.urlEndPoint+'/create',empleado);
  }

getEmpleadoById(id:number):Observable<Empleado>{
    return this.http.get<Empleado>((this.urlEndPoint)+'/'+id)
  }

  putEmpleado(id:number,empleado:Empleado):Observable<Empleado>{
    return this.http.put<Empleado>((this.urlEndPoint)+'/edit/'+id,empleado)
  }

  deleteEmpleado(id:number):Observable<Empleado>{
    return this.http.delete<Empleado>((this.urlEndPoint)+'/'+id)
  }
}
