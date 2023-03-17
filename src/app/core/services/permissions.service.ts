import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  private urlEndPoint:string='http://localhost:9090/productos';
  // private urlEndPointPost:string='http://localhost:9090/create';
  // private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http:HttpClient) { }

  getAllPermissions(){
    return [
        {
            profile:"Developer",
            permissions:
            [
                '/productos/create',
                '/productos',
                '/productos/edit',
                '/productos/*',
                '/clientes/create',
                '/clientes',
                '/clientes/edit',
                '/clientes/*',
            ]
        },
        {
            profile:"Guest",
            permissions:
            [
                '/productos',
                '/clientes'
            ]
        }
]
  }
//   getAllProductos():Observable<Producto>{
//     return this.http.get<Producto>(this.urlEndPoint)
//   }

//   create(producto:Producto) :Observable<Producto>{
//     return this.http.post<Producto>(this.urlEndPoint+'/create',producto);
//   }

// getProductoById(id:number):Observable<Producto>{
//     return this.http.get<Producto>((this.urlEndPoint)+'/'+id)
//   }

//   putProducto(id:number,producto:Producto):Observable<Producto>{
//     return this.http.put<Producto>((this.urlEndPoint)+'/edit/'+id,producto)
//   }

//   deleteProducto(id:number):Observable<Producto>{
//     return this.http.delete<Producto>((this.urlEndPoint)+'/'+id)
//   }
}
