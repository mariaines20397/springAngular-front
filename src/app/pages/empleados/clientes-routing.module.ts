import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { ClientesComponent } from './clientes.component';
import { RoleGuard } from 'src/app/core/guards/role-guard.guard';

const routes:Routes=[
  {path:'', 
  component:ClientesComponent},
  {path:'create',
  canActivate:[RoleGuard],
  data:{rol:'ROLE_ADMIN'},
  component:ClienteComponent},
  {path:'edit/:id' , 
  canActivate:[RoleGuard],
  data:{rol:'ROLE_ADMIN'},
  component:ClienteComponent},
  {path:':id' , 
  component:ClienteComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class EmpleadosRoutingModule { }
