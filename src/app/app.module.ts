import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ClientesComponent } from './pages/empleados/clientes.component';
import { ClienteComponent } from './pages/empleados/cliente/cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateClienteComponent } from './pages/empleados/modal/create-cliente/create-clientes.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditClienteComponent } from './pages/empleados/modal/edit-cliente/edit-clientes.component';
import { DeleteClienteComponent } from './pages/empleados/modal/delete-cliente/delete-clientes.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductoComponent } from './pages/productos/producto/producto.component';
import { CreateProductoComponent } from './pages/productos/modal/create-producto/create-producto.component';
import { DeleteProductoComponent } from './pages/productos/modal/delete-producto/delete-producto.component';
import { EditProductoComponent } from './pages/productos/modal/edit-producto/edit-producto.component';
import { SharedModule } from './shared/shared.module';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { HeaderInterceptor } from './core/interceptors/header.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ClienteComponent,
    CreateClienteComponent,
    EditClienteComponent,
    DeleteClienteComponent,
    ProductosComponent,
    ProductoComponent,
    CreateProductoComponent,
    DeleteProductoComponent,
    EditProductoComponent,
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
  providers: [{provide:HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
