import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ClientesComponent } from './pages/empleados/clientes.component';
import { ClienteComponent } from './pages/empleados/cliente/cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateClienteComponent } from './pages/empleados/modal/create-cliente/create-clientes.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditClienteComponent } from './pages/empleados/modal/edit-cliente/edit-clientes.component';
import { DeleteClienteComponent } from './pages/empleados/modal/delete-cliente/delete-clientes.component';

// export function permissionsFactory(loadPermissionsService:EmpleadosService,
//   ngxPermissionsService:NgxPermissionsService){
//   return()=>{
//     return loadPermissionsService.loadPermissions()
//       .toPromise().then((data)=>{
//         ngxPermissionsService.loadPermissions(data)
//       })
//   }
// }
@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ClienteComponent,
    CreateClienteComponent,
    EditClienteComponent,
    DeleteClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    // NgxPermissionsModule.forRoot()
  ],
  providers: [
  //   {
  //   // provide:APP_INITIALIZER,
  //   // useFactory: permissionsFactory,
  //   // deps:[EmpleadosService, NgxPermissionsService]
  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
