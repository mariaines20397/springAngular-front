import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { ClientesComponent } from './clientes.component';
import { NgxPermissionsModule } from 'ngx-permissions';

const routes:Routes=[
  // {path:'**', redirectTo:'/', pathMatch:'full'},
  {path:'create',component:ClienteComponent},
  {path:'edit/:id' , component:ClienteComponent},
  {path:':id' , component:ClientesComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // NgxPermissionsModule.forChild({
    //   permissionsIsolate:true,
    //   rolesIsolate:true
    // })
  ]
})
export class EmpleadosRoutingModule { }
