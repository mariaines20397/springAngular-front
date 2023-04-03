import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../sign-up/model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  private _usuario:Usuario={
    username:'',
    password:'',
    email:'',
    nombre:'',
    apellido:''
  };
  private _token!:string;

  constructor(private http: HttpClient) { }

  public get usuario():Usuario{
    if (this._usuario != null) {
      return this._usuario;
    } else if(this._usuario == null && sessionStorage.getItem('usuario') != null){
      this._usuario=JSON.parse(sessionStorage.getItem('usuario')!) as Usuario;
      return this._usuario;
    }
    this._usuario={
      username:'',
      password:'',
      email:'',
      nombre:'',
      apellido:'',
      rol:[]
    }
    return this._usuario;
  }

  public get token():any{
    if (this._token != null) {
      return this._token;
    } else if(this._token == null && sessionStorage.getItem('token') != null){
      this._token=sessionStorage.getItem('token')!;
      return this._token;
    }
    
    return null;
  }

  login(usuario: Usuario): Observable<any> {
    const urlEndPoint: string = 'http://localhost:9090/oauth/token';
    const credenciales = btoa('angularapp' + ':' + '12345');
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + credenciales
    });
    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', usuario.username);
    params.set('password', usuario.password!);

    return this.http.post<any>(urlEndPoint, params.toString(), { headers: httpHeaders })
  }

  guardarUsuario(access_token:string){
    let payload = this.obtenerPayload(access_token);
    console.log('payload: '+ payload.user_name);
    
    this._usuario.nombre=payload.nombre;
    this._usuario.apellido=payload.apellido;
    this._usuario.email=payload.email;
    this._usuario.username=payload.user_name;
    this._usuario.rol=payload.authorities;
    
    sessionStorage.setItem('usuario',JSON.stringify(this._usuario));
  }

  guardarToken(access_token:string){
    this._token=access_token;
    sessionStorage.setItem('token',this._token);

  }

  obtenerPayload(access_token:string){
    if (access_token != null) {
      return JSON.parse(atob(access_token.split(".")[1]));
      
    }
    return null;
  }

  
}
