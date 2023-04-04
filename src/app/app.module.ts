import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ClientesComponent } from './pages/empleados/clientes.component';
import { ClienteComponent } from './pages/empleados/cliente/cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductoComponent } from './pages/productos/producto/producto.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { HeaderInterceptor } from './core/interceptors/header.interceptor';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ClienteComponent,
    ProductosComponent,
    ProductoComponent,
    SignInComponent,
    SignUpComponent,
    UsuariosComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
